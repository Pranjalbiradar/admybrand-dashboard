import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Admybrand Dashboard</h1>
      <Card>
        <CardContent>
          <p>This is your dashboard overview section.</p>
        </CardContent>
      </Card>
    </div>
  );
}
