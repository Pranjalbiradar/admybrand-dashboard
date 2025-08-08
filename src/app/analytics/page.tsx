"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const campaignData = [
    { name: "Campaign A", reach: 4000 },
    { name: "Campaign B", reach: 3000 },
    { name: "Campaign C", reach: 5000 },
    { name: "Campaign D", reach: 2000 },
];

const deviceData = [
    { name: "Mobile", value: 65 },
    { name: "Desktop", value: 25 },
    { name: "Tablet", value: 10 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

export default function AnalyticsPage() {
    return (
    <div className="p-6 space-y-6">
    <h1 className="text-2xl font-bold">Analytics</h1>

      {/* Campaign Reach Bar Chart */}
        <Card>
        <CardHeader>
        <CardTitle>Campaign Reach</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={campaignData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="reach" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
        </CardContent>
    </Card>

      {/* Device Usage Pie Chart */}
        <Card>
        <CardHeader>
        <CardTitle>Device Usage</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="h-72 flex justify-center items-center">
            <ResponsiveContainer width="80%" height="100%"> 
            <PieChart>
            <Pie 
                data={deviceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                }
                >
                {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                </Pie>
                <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
        </CardContent>
    </Card>
    </div>
    );
}
