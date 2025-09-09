import { useEffect, useState } from "react";
import Heatmap from "./components/Heatmap";
import EntryCounter from "./components/EntryCounter";
import TrendsChart from "./components/TrendsChart";

function App() {
  const [footfall, setFootfall] = useState({});
  const [entry, setEntry] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/footfall?date=2025-09-09")
      .then(res => res.json())
      .then(data => setFootfall(data));

    fetch("http://localhost:8000/entry-count")
      .then(res => res.json())
      .then(data => setEntry(data));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6 font-sans">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Croma Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Heatmap data={footfall} />
        <EntryCounter entry={entry} />
      </div>
      <div className="mt-6">
        <TrendsChart data={entry} />
      </div>
    </div>
  );
}

export default App;
