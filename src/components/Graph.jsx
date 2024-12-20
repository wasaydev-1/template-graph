import React from "react";
import Legend from "./Legend";
import GraphArea from "./GraphArea";
import XAxis from "./XAxis";
import YAxis from "./YAxis";

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
