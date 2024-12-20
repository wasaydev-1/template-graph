import React from "react";

const YAxis = () => {
  const values = ["2.5 kWh", "1.25 kWh", "0 kWh"];

  return (
    <div className="absolute left-0 top-0 h-full flex flex-col justify-between pr-4">
      {values.map((value) => (
        <div key={value} className="text-sm text-gray-600">
          {value}
        </div>
      ))}
    </div>
  );
};

export default YAxis;
