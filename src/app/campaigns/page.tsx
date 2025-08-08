"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const campaigns = [
  {
    name: "Summer Launch",
    status: "Active",
    startDate: "2025-07-01",
    reach: "12,000",
  },
  {
    name: "Back to School",
    status: "Completed",
    startDate: "2025-06-10",
    reach: "18,000",
  },
  {
    name: "Monsoon Sale",
    status: "Paused",
    startDate: "2025-08-01",
    reach: "7,500",
  },
];

export default function CampaignsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Campaigns</h1>

      <Card>
        <CardHeader>
          <CardTitle>All Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Start Date</th>
                  <th className="py-2 px-4">Reach</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{campaign.name}</td>
                    <td className="py-2 px-4">{campaign.status}</td>
                    <td className="py-2 px-4">{campaign.startDate}</td>
                    <td className="py-2 px-4">{campaign.reach}</td>
                    <td className="py-2 px-4 space-x-2">
                      <Button variant="outline" size="sm">View</Button>
                      <Button variant="outline" size="sm">Edit</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
