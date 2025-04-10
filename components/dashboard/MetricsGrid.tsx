"use client";

import { useEffect, useState } from "react";
import { AirQualityType } from "@/types/air-quality";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Thermometer, Wind } from "lucide-react";

export default function MetricsGrid({
  airQuality,
}: {
  airQuality: AirQualityType;
}) {
  const [metricsData, setMetricsData] = useState<any[]>([]);

  useEffect(() => {
    setMetricsData([
      {
        label: "PM2.5",
        value: airQuality.pm25,
        unit: "μg/m³",
        icon: Wind,
      },
      {
        label: "PM10",
        value: airQuality.pm10,
        unit: "μg/m³",
        icon: Wind,
      },
      {
        label: "Temperature",
        value: airQuality.temperature,
        unit: "°C",
        icon: Thermometer,
      },
      {
        label: "Humidity",
        value: airQuality.humidity,
        unit: "%",
        icon: Droplets,
      },
      { label: "SO2", value: airQuality.so2, unit: "ppm", icon: Wind },
      { label: "NO2", value: airQuality.no2, unit: "ppm", icon: Wind },
      { label: "CO", value: airQuality.co, unit: "ppm", icon: Wind },
      {
        label: "Wind Speed",
        value: airQuality.windSpeed,
        unit: "ppm",
        icon: Wind,
      },
    ]);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {metricsData.length === 0 ? (
        <div>Loading metrics...</div>
      ) : (
        metricsData.map((metric, index) => (
          <Card key={index} className="bg-white/80 backdrop-blur">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-sky-600">
                  {metric.label}
                </span>
                <metric.icon className="h-4 w-4 text-sky-600" />
              </div>
              <div className="text-2xl font-bold text-sky-900">
                {metric.value}
              </div>
              <div className="text-sm text-sky-600">{metric.unit}</div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
