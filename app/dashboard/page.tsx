import type { Metadata } from "next";
import { BASE_URL } from "@/app/lib/data";
import { cookies } from "next/headers";
import { getUser } from "@/app/utils/get-user";
import { AirQualityType } from "@/app/types/air-quality";
import Chatbot from "@/app/components/dashboard/Chatbot";
import MetricsGrid from "@/app/components/dashboard/MetricsGrid";
import ParticleCount from "@/app/components/dashboard/ParticleCount";
import AQIComparison from "@/app/components/dashboard/AQIComparison";
import HistoricalChart from "@/app/components/dashboard/HistoricalChart";
import ComparisonChart from "@/app/components/dashboard/ComparisonChart";
import DashboardHeader from "@/app/components/dashboard/DashboardHeader";

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
