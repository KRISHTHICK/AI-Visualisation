import React from "react";

function Heatmap({ data }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4">
      <h2 className="text-lg font-semibold mb-2">Zone-Wise Heatmap</h2>
      {Object.entries(data).map(([zone, count]) => (
        <div key={zone} className="flex justify-between p-2 border-b">
          <span>{zone}</span>
          <span className="font-bold text-green-600">{count}</span>
        </div>
      ))}
    </div>
  );
}

export default Heatmap;
