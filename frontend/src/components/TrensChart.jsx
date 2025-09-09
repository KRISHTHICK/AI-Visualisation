import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function TrendsChart({ data }) {
  if (!data.today) return null;

  const chartData = data.today.trend.map((val, idx) => ({
    time: `T${idx + 1}`,
    count: val,
  }));

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4">
      <h2 className="text-lg font-semibold mb-2">Entry Trends</h2>
      <LineChart width={600} height={300} data={chartData}>
        <CartesianGrid stroke="#eee" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="count" stroke="#16a34a" strokeWidth={2} />
      </LineChart>
    </div>
  );
}

export default TrendsChart;
