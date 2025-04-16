"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
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
  { name: "Mon", value: 130 },
  { name: "Tue", value: 90 },
  { name: "Wed", value: 150 },
  { name: "Thu", value: 250 },
  { name: "Fri", value: 45 },
  { name: "Sat", value: 270 },
  { name: "Sun", value: 190 },
];

export default function HistoricalChart() {
  return (
    <Card className="bg-white/80 backdrop-blur">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-sky-900">
          Historical Data
        </CardTitle>
        <div className="flex items-center gap-2">
          <Select defaultValue="aqi">
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Select metric" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="aqi">AQI</SelectItem>
              <SelectItem value="pm25">PM2.5</SelectItem>
              <SelectItem value="pm10">PM10</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="week">
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Day</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
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
                dataKey="value"
                stroke="#0284c7"
                strokeWidth={2}
                dot={{ fill: "#0284c7" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
