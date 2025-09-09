import React from "react";

function EntryCounter({ entry }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 text-center">
      <h2 className="text-lg font-semibold mb-2">Entry Count (Today)</h2>
      <p className="text-4xl font-bold text-green-600">{entry.today?.count || 0}</p>
    </div>
  );
}

export default EntryCounter;
