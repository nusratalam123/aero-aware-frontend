'use client'

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import axios from "axios";

export default function DashboardHeader() {
  const [user, setUser] = useState<any>(null);
  const [aqi, setAqi] = useState<number | null>(null);
  const [aqiStatus, setAqiStatus] = useState<string>("Loading...");
  const [lastUpdated, setLastUpdated] = useState<string>("Just now");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token"); // or get from cookies
        // console.log("Token:", token);
        const response = await axios.get("https://aero-air-backend.vercel.app/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
        setUser(response.data); // Store user data
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null); // Handle errors by resetting user state
      }
    };
    
    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchAirQuality = async () => {
      if (user?.data.district) {
        try {
          const token = localStorage.getItem("token"); // or get from cookies
          const response = await axios.get(
            `https://aero-air-backend.vercel.app/air-quality?location=${user.data.district}`,{
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setAqi(response.data.aqi);
          setAqiStatus(getAqiStatus(response.data.aqi));
          setLastUpdated("A few minutes ago");
          console.log("Air quality data:", response.data);
        } catch (error) {
          console.error("Error fetching air quality data:", error);
        }
      }
    };

    if (user) {
      fetchAirQuality();
    }
  }, [user]); // Run when user data changes

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
              Welcome back, {user?.data.firstName || "Guest"}
            </h1>
            <h1 className="text-2xl font-bold">
              Area, {user?.data.district || "Guest"}
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
