import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  ReferenceLine,
  Tooltip,
} from "recharts";
const XAxis = () => {
  return (
    <div className="absolute bottom-0 left-20 right-4 flex justify-between text-sm text-gray-600">
      <span>MIDNIGHT</span>
      <span>MIDDAY</span>
      <span>MIDNIGHT</span>
    </div>
  );
};
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

const GraphArea = () => {
  const data = [
    { night: 20, solar: 0, export: 0, adjustedNight: 40 },
    { night: 20, solar: 20, export: 10, adjustedNight: 10 },
    { night: 10, solar: 50, export: 25, adjustedNight: 0 },
    { night: 5, solar: 75, export: 35, adjustedNight: 0 },
    { night: 10, solar: 50, export: 20, adjustedNight: 10 },
    { night: 20, solar: 20, export: 10, adjustedNight: 50 },
    { night: 30, solar: 0, export: 0, adjustedNight: 30 },
  ];

  return (
    <div className="relative w-full h-full">
      {/* Grid lines */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border-t border-gray-200 h-1/4" />
        ))}
      </div>

      <ResponsiveContainer
        width="100%"
        height="100%"
        className="absolute inset-0"
      >
        <AreaChart data={data}>
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            labelStyle={{
              fontWeight: "bold",
              color: "#333",
            }}
            itemStyle={{
              fontSize: "12px",
            }}
          />
          {[10, 91, 60, 29].map((value, index) => (
            <ReferenceLine
              key={index}
              y={value} // Adjust `value` to place each dashed line at a specific position
              strokeDasharray="5 5" // Dotted line pattern
              stroke="#8884d8" // Line color
              strokeWidth={1} // Line thickness
            />
          ))}
          <Area
            dataKey="solar"
            type="monotone"
            fill="#FBBF24"
            opacity={3}
            stackId="1"
            strokeDasharray="5 5" // Add dotted line for solar
            stroke="#FBBF24" // Add stroke color
          />
          {/* Exported energy curve */}
          <Area
            dataKey="export"
            type="monotone"
            fill="#FF4500"
            opacity={4}
            stackId="1"
            strokeDasharray="5 5" // Add dotted line for export
            stroke="#EF4444" // Add stroke color
          />
          {/* Night time grid energy (cuts through) */}
          <Area
            dataKey="adjustedNight"
            type="monotone"
            fill="#191970"
            opacity={4}
            stackId="1"
            strokeDasharray="5 5" // Add dotted line for night
            stroke="#1E3A8A" // Add stroke color
          />

          <ReferenceLine
            y={114}
            stroke="none"
            label={{
              value: "Average Daily Max Solar ",
              position: "insideTopLeft",
              fill: "#FFA500",
              fontSize: 20,
              fontWeight: "bold",
            }}
          />
          <ReferenceLine
            y={106}
            stroke="none"
            label={{
              value: " Generation 2.02 kWh",
              position: "insideTopLeft",
              fill: "#FFA500",
              fontSize: 20,
              fontWeight: "bold",
            }}
          />

          <ReferenceLine
            y={80}
            stroke="none"
            label={{
              value: " Average Daily Max ",
              position: "insideTopLeft",
              fill: "#0000FF",
              fontSize: 20,
              fontWeight: "semibold",
            }}
          />
          <ReferenceLine
            y={72}
            stroke="none"
            label={{
              value: "  Household Energy Use 1.18 kWh",
              position: "insideTopLeft",
              fill: "#0000FF",
              fontSize: 20,
              fontWeight: "semibold",
            }}
          />
          <ReferenceLine
            y={40}
            stroke="none"
            label={{
              value: "Energy from Solar",
              position: "center",
              fill: "#ffffff",
              fontSize: 20,
              fontWeight: "bold",
            }}
          />
          <ReferenceLine
            y={85}
            stroke="none"
            label={{
              value: "Solar Energy Exported",
              position: "center",
              fill: "#ffffff",
              fontSize: 14,
              fontWeight: "bold",
            }}
          />
          <ReferenceLine
            y={60}
            stroke="none"
            label={{
              value: "Energy from Grid",
              position: "insideTopRight",
              fill: "#ffffff",
              fontSize: 14,
              fontWeight: "bold",
              dx: -50, // Moves the label 10 units to the left
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const Graph = () => {
  return (
    <div className="max-w-4xl mx-auto bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-center mb-12">
        Data for a 3kW solar energy installation
      </h1>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="relative h-[400px] mt-12 mb-8">
          <YAxis />
          <div className="absolute left-20 right-4 top-0 bottom-8 border-l border-gray-300">
            <GraphArea />
          </div>
          <XAxis />
        </div>
        <Legend />
      </div>
    </div>
  );
};

export default Graph;
