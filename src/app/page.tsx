"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BarChart, LineChart, PieChart } from "@/components/ui/charts";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/components/ui/table/column";
import { mockTableData } from "@/lib/data/mockTableData";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 space-y-6">
      {/* --- Metric Cards --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-[100px] w-full" />
            ))
          : <>
              <Card>
                <CardHeader><CardTitle>Revenue</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">₹1.2L</p>
                  <p className="text-sm text-muted-foreground">+18% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Users</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">3,542</p>
                  <p className="text-sm text-muted-foreground">+10% growth</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Conversions</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">742</p>
                  <p className="text-sm text-muted-foreground">5.8% conversion rate</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Growth</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">+12%</p>
                  <p className="text-sm text-muted-foreground">vs last quarter</p>
                </CardContent>
              </Card>
            </>
        }
      </div>

      {/* --- Charts --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader><CardTitle>Revenue Over Time</CardTitle></CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-[300px] w-full" />
            ) : (
              <LineChart />
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>User Source</CardTitle></CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-[300px] w-full" />
            ) : (
              <PieChart />
            )}
          </CardContent>
        </Card>
      </div>

      {/* --- Bar Chart --- */}
      <Card>
        <CardHeader><CardTitle>Daily Signups</CardTitle></CardHeader>
        <CardContent>
          {loading ? (
            <Skeleton className="h-[250px] w-full" />
          ) : (
            <BarChart />
          )}
        </CardContent>
      </Card>

      {/* --- Data Table --- */}
      <Card>
        <CardHeader><CardTitle>Latest Activity</CardTitle></CardHeader>
        <CardContent>
          {loading ? (
            <Skeleton className="h-[400px] w-full" />
          ) : (
            <DataTable columns={columns} data={mockTableData} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
