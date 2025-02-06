import type { Metadata } from "next"
import DashboardHeader from "@/components/dashboard/DashboardHeader"
import MetricsGrid from "@/components/dashboard/MetricsGrid"
import HistoricalChart from "@/components/dashboard/HistoricalChart"
import ComparisonChart from "@/components/dashboard/ComparisonChart"
import ParticleCount from "@/components/dashboard/ParticleCount"
import AQIComparison from "@/components/dashboard/AQIComparison"
import Chatbot from "@/components/dashboard/Chatbot"

export const metadata: Metadata = {
  title: "Dashboard | AeroAware",
  description: "Monitor your environmental data in real-time",
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-sky-100 to-sky-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          <DashboardHeader />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <MetricsGrid />
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
  )
}

