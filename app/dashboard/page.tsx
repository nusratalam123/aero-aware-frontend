import type { Metadata } from "next";
import { BASE_URL } from "@/lib/data";
import { cookies } from "next/headers";
import { getUser } from "@/utils/get-user";
import { AirQualityType } from "@/types/air-quality";
import Chatbot from "@/components/dashboard/Chatbot";
import MetricsGrid from "@/components/dashboard/MetricsGrid";
import ParticleCount from "@/components/dashboard/ParticleCount";
import AQIComparison from "@/components/dashboard/AQIComparison";
import HistoricalChart from "@/components/dashboard/HistoricalChart";
import ComparisonChart from "@/components/dashboard/ComparisonChart";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export const metadata: Metadata = {
  title: "Dashboard | AeroAware",
  description: "Monitor your environmental data in real-time",
};

const getAirQuality = async () => {
  const token = cookies().get("token")?.value;
  const user = await getUser();

  const res = await fetch(
    `${BASE_URL}/air-quality?location=${user?.district}`,
    {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 120 },
    },
  );
  const data = await res.json();
  return data as AirQualityType;
};

export default async function DashboardPage() {
  const user = await getUser();
  const airQuality = await getAirQuality();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-sky-100 to-sky-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          <DashboardHeader user={user} airQuality={airQuality} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <MetricsGrid airQuality={airQuality} />
              <HistoricalChart />
              <div className="grid md:grid-cols-2 gap-6">
                <ParticleCount />
                <ComparisonChart />
              </div>
            </div>
            <div className="space-y-6">
              <AQIComparison />
              <Chatbot />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
