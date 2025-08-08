"use client";

import {
  ResponsiveContainer,
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart as ReLineChart,
  Line,
  PieChart as RePieChart,
  Pie,
  Cell,
} from "recharts";

const sampleData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 278 },
  { name: "May", value: 189 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

export function BarChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ReBarChart data={sampleData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </ReBarChart>
    </ResponsiveContainer>
  );
}

export function LineChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ReLineChart data={sampleData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </ReLineChart>
    </ResponsiveContainer>
  );
}

export function PieChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RePieChart>
        <Pie
          data={sampleData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {sampleData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </RePieChart>
    </ResponsiveContainer>
  );
}
