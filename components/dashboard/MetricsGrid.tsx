'use client';

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Thermometer, Wind } from "lucide-react";
import axios from "axios";

const metrics = [
  { label: "PM2.5", value: "09", unit: "μg/m³", icon: Wind },
  { label: "PM10", value: "09", unit: "μg/m³", icon: Wind },
  { label: "Temperature", value: "27", unit: "°C", icon: Thermometer },
  { label: "Humidity", value: "54", unit: "%", icon: Droplets },
  { label: "SO2", value: "09", unit: "ppm", icon: Wind },
  { label: "NO2", value: "09", unit: "ppm", icon: Wind },
];

export default function MetricsGrid() {
  const [metricsData, setMetricsData] = useState<any[]>([]); // For storing metrics data
  const [user, setUser] = useState<any>(null); // For storing user data

  // Fetch user data from /auth/me
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token"); // or get from cookies
        console.log("Token:", token);
        const response = await axios.get("https://aero-air-backend.vercel.app/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
        console.log("User data:", response.data);
        setUser(response.data); // Store user data
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null); // Handle errors by resetting user state
      }
    };
    
    fetchUserData();
  }, []);

  // Fetch air quality data based on the user's district
  useEffect(() => {
    const fetchAirQuality = async () => {
      console.log("User district:", user.data.district);
      if (user?.data.district) {
        try {
          console.log("Fetching air quality data for:", user.data.district);
          const token = localStorage.getItem("token"); // or get from cookies
          const response = await axios.get(
            `https://aero-air-backend.vercel.app/air-quality?location=${user.data.district}`,{
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("Air quality data:", response.data);
          setMetricsData([
            { label: "PM2.5", value: response.data.pm25, unit: "μg/m³", icon: Wind },
            { label: "PM10", value: response.data.pm10, unit: "μg/m³", icon: Wind },
            { label: "Temperature", value: response.data.temperature, unit: "°C", icon: Thermometer },
            { label: "Humidity", value: response.data.humidity, unit: "%", icon: Droplets },
            { label: "SO2", value: response.data.so2, unit: "ppm", icon: Wind },
            { label: "NO2", value: response.data.no2, unit: "ppm", icon: Wind },
            { label: "CO", value: response.data.co, unit: "ppm", icon: Wind },
            { label: "Wind Speed", value: response.data.windSpeed, unit: "ppm", icon: Wind },
          ]);
        } catch (error) {
          console.error("Error fetching air quality data:", error);
        }
      }
    };

    if (user) {
      fetchAirQuality();
    }
  }, [user]); // Run when user data changes

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {metricsData.length === 0 ? (
        <div>Loading metrics...</div>
      ) : (
        metricsData.map((metric, index) => (
          <Card key={index} className="bg-white/80 backdrop-blur">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-sky-600">{metric.label}</span>
                <metric.icon className="h-4 w-4 text-sky-600" />
              </div>
              <div className="text-2xl font-bold text-sky-900">{metric.value}</div>
              <div className="text-sm text-sky-600">{metric.unit}</div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
