"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

const data = [
  { name: "Mon", indoor: 40, outdoor: 80 },
  { name: "Tue", indoor: 70, outdoor: 120 },
  { name: "Wed", indoor: 50, outdoor: 90 },
  { name: "Thu", indoor: 180, outdoor: 200 },
  { name: "Fri", indoor: 70, outdoor: 80 },
  { name: "Sat", indoor: 40, outdoor: 100 },
  { name: "Sun", indoor: 50, outdoor: 200 },
];

export default function ComparisonChart() {
  return (
    <Card className="bg-white/80 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-sky-900">
          Indoor vs Outdoor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="indoor"
                stroke="#0284c7"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="outdoor"
                stroke="#0ea5e9"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
