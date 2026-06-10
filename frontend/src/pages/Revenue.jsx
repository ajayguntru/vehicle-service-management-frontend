import { useEffect, useState } from "react";
import api from "../services/api";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Revenue() {
  const [revenue, setRevenue] = useState(0);

  const graphData = [
    { month: "Jan", revenue: 1500 },
    { month: "Feb", revenue: 3000 },
    { month: "Mar", revenue: 4500 },
    { month: "Apr", revenue: 6000 },
  ];

  useEffect(() => {
    api.get("/api/revenue/")
      .then((res) => {
        setRevenue(res.data.total_revenue);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h2>Revenue Dashboard</h2>

      <h3>Total Revenue: ₹{revenue}</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={graphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Revenue;