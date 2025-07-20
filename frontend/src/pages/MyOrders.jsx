import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import { Loader2, Download, ClipboardCopy, CheckCircle2 } from "lucide-react";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const MyOrders = () => {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/orders/user/${user?.id}`
        );
        setOrders(res.data);
      } catch (error) {
        console.error("Error fetching orders", error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) fetchOrders();
  }, [user]);

  const handleCopy = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    toast.success("Order ID copied!");
  };

  const handleDownloadInvoice = (order) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Order Invoice", 14, 22);

    doc.setFontSize(12);
    doc.text(`Order ID: ${order._id}`, 14, 32);
    doc.text(`Name: ${order.userName}`, 14, 40);
    doc.text(`Email: ${order.email}`, 14, 48);
    doc.text(`Phone: ${order.phone}`, 14, 56);

    const fullAddress = `${order.address.street}, ${order.address.city}, ${order.address.postCode}, ${order.address.country}`;
    doc.text(`Address: ${fullAddress}`, 14, 64, { maxWidth: 180 });

    doc.text(`Date: ${new Date(order.createdAt).toLocaleString()}`, 14, 72);

    autoTable(doc, {
      startY: 80,
      head: [["Product", "Qty", "Price", "Total"]],
      body: order.products.map((p) => [
        p.name,
        p.quantity,
        `₹${p.price}`,
        `₹${p.quantity * p.price}`,
      ]),
    });

    const finalY = doc.lastAutoTable.finalY || 100;
    doc.text(`Total Cost: ₹${order.totalCost}`, 14, finalY + 10);

    doc.save(`invoice_${order._id}.pdf`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#090701] text-white">
        <Loader2 className="animate-spin w-10 h-10" />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-[#090701] min-h-screen text-white py-10 px-6 lg:px-20">
        <h1 className="text-4xl font-bold mb-10">My Orders</h1>

        {orders.length === 0 ? (
          <p className="text-center text-gray-500">No orders found.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto max-w-[1400px]">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-gray-900 rounded-xl shadow-md p-5 space-y-5 border border-gray-700"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Order ID</h2>
                  <button onClick={() => handleCopy(order._id)}>
                    {copiedId === order._id ? (
                      <CheckCircle2 className="w-5 h-5 text-lime-400" />
                    ) : (
                      <ClipboardCopy className="w-5 h-5 text-gray-400 hover:text-white" />
                    )}
                  </button>
                </div>
                <p className="text-sm break-words text-gray-400">{order._id}</p>

                <div>
                  <h3 className="font-medium text-md">Products</h3>
                  <ul className="space-y-1 text-sm text-gray-300">
                    {order.products.map((product, idx) => (
                      <li key={idx} className="flex justify-between">
                        <span>
                          {product.name} x {product.quantity}
                        </span>
                        <span>₹{product.price * product.quantity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-sm text-gray-400 space-y-1">
                  <p>
                    <span className="font-semibold">Total:</span> ₹
                    {order.totalCost}
                  </p>
                  <p>
                    <span className="font-semibold">Status:</span> ✅ Paid
                  </p>
                  <p>
                    <span className="font-semibold">Date:</span>{" "}
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="text-sm text-gray-500">
                  <p className="font-semibold text-white">Address</p>
                  <p>
                    {order.address.street}, {order.address.city} -{" "}
                    {order.address.postCode}, {order.address.country}
                  </p>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleDownloadInvoice(order)}
                    className="bg-lime-400 hover:bg-lime-500 px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-black"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyOrders;
