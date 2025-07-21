import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const format = (val) => val.toString().padStart(2, "0");

  const hours = time.getHours();
  const isPM = hours >= 12;
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = isPM ? "PM" : "AM";

  return (
    <div className="w-1/2 h-40 flex justify-end gap-4 items-center">
      <div className="border-zinc-300 hover:cursor-context-menu rounded-full py-1 px-2 text-[0.8rem] border-1 h-fit w-fit bg-white/40">
        {format(formattedHours)}
      </div>
      <div className="border-zinc-300 hover:cursor-context-menu rounded-full py-1 px-2 text-[0.8rem] border-1 h-fit w-fit">
        {format(minutes)}
      </div>
      <div className="border-zinc-300 hover:cursor-context-menu rounded-full py-1 px-2 text-[0.8rem] border-1 h-fit w-fit">
        {format(seconds)}
      </div>
      <div className="text-[0.7rem] px-1 hover:cursor-context-menu rounded bg-black text-white font-medium h-fit w-fit">
        {ampm}
      </div>
    </div>
  );
}

export default Clock;