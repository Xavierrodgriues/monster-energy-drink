import { createContext, useContext } from "react";

const CouponContext = createContext();

export const coupons = [
  { code: "ENERGY10", discount: 10 },
  { code: "MONSTER5", discount: 5 },
  { code: "FUEL20", discount: 20 },
  { code: "BUZZ15", discount: 15 },
  { code: "POWER25", discount: 25 },
];

export const CouponProvider = ({ children }) => {
  return (
    <CouponContext.Provider value={{ coupons }}>
      {children}
    </CouponContext.Provider>
  );
};

export const useCoupon = () => useContext(CouponContext);