import { User } from "lucide-react";
import { UserType } from "@/types/user";
import { AirQualityType } from "@/types/air-quality";
import { Card, CardContent } from "@/components/ui/card";

export default async function DashboardHeader({
  user,
  airQuality,
}: {
  user?: UserType | null;
  airQuality: AirQualityType;
}) {
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
              Welcome back, {user?.firstName || "Guest"}
            </h1>
            <h1 className="text-lg font-medium">
              Area: {user?.district || "Unknown"}
            </h1>
            <p className="text-sky-100">Last updated: {airQuality.updatedAt}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-5xl font-bold">{airQuality.aqi ?? "--"}</div>
          <div className="text-sky-100">
            AQI - {getAqiStatus(airQuality.aqi)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
