import React from "react";

const Legend = () => {
  const items = [
    { color: "bg-blue-900", label: "Summer Load" },
    { color: "bg-orange-400", label: "Summer Generation" },
  ];

  return (
    <div className="flex justify-end items-center space-x-8 mt-4">
      {items.map(({ color, label }) => (
        <div key={label} className="flex items-center space-x-2">
          <div className={`w-14 h-3 ${color}`}></div>
          <span className="text-sm text-gray-700">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
