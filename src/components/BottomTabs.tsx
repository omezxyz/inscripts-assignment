import { useState } from "react";

export function BottomTabs() {
  const [active, setActive] = useState("All Orders");

  return (
    <div className="flex items-center space-x-4 border-t border-gray-300 p-2 bg-white text-sm">
      {["All Orders", "Pending", "Reviewed", "Arrived"].map((tab) => (
        <button
          key={tab}
          className={`relative pt-2 pb-1 px-2 text-gray-700 ${
            active === tab ? "bg-green-50 text-green-900 font-medium" : ""
          }`}
          onClick={() => {
            setActive(tab);
            console.log(`${tab} tab clicked`);
          }}
        >
          {tab}
          {active === tab && (
            <span className="absolute top-0 left-0 right-0 h-[2px] bg-green-900"></span>
          )}
        </button>
      ))}

      <button
        className="text-gray-600 text-lg px-2"
        onClick={() => console.log("+ tab clicked")}
      >
        +
      </button>
    </div>
  );
}
