import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"

export default function DashboardHeader() {
  return (
    <Card className="bg-gradient-to-r from-sky-500 to-sky-600 text-white">
      <CardContent className="flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
            <User className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Welcome back, Alex</h1>
            <p className="text-sky-100">Last updated: 2 minutes ago</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-5xl font-bold">87</div>
          <div className="text-sky-100">AQI - Moderate</div>
        </div>
      </CardContent>
    </Card>
  )
}

