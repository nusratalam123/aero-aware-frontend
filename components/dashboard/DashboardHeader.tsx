"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import axios from "axios";
import router from "next/router";

export default function DashboardHeader() {
  const [user, setUser] = useState<any>(null);
  const [aqi, setAqi] = useState<number | null>(null);
  const [aqiStatus, setAqiStatus] = useState<string>("Loading...");
  const [lastUpdated, setLastUpdated] = useState<string>("Just now");

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (user?.data?.district) {
      fetchAirQuality(user.data.district);
    }
  }, [user]); // Fetch air quality when user data is available

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login"); // Redirect to login if no token
        return;
      }

      const response = await axios.get("https://aero-air-backend.vercel.app/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("User data:", response.data);

      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
    }
  };

  const fetchAirQuality = async (district: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");

      const response = await axios.get(
        `https://aero-air-backend.vercel.app/air-quality?location=${district}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setAqi(response.data.aqi);
      setAqiStatus(getAqiStatus(response.data.aqi));
      setLastUpdated("A few minutes ago");
    } catch (error) {
      console.error("Error fetching air quality data:", error);
      setAqiStatus("Unavailable");
    }
  };

  const getAqiStatus = (aqi: number) => {
    if (aqi <= 50) return "Good";
    if (aqi <= 100) return "Moderate";
    if (aqi <= 150) return "Unhealthy for Sensitive Groups";
    if (aqi <= 200) return "Unhealthy";
    if (aqi <= 300) return "Very Unhealthy";
    return "Hazardous";
  };

  return (
    <Card className="bg-gradient-to-r from-sky-500 to-sky-600 text-white">
      <CardContent className="flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
            <User className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              Welcome back, {user?.data?.firstName || "Guest"}
            </h1>
            <h1 className="text-lg font-medium">
              Area: {user?.data?.district || "Unknown"}
            </h1>
            <p className="text-sky-100">Last updated: {lastUpdated}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-5xl font-bold">{aqi ?? "--"}</div>
          <div className="text-sky-100">AQI - {aqiStatus}</div>
        </div>
      </CardContent>
    </Card>
  );
}
