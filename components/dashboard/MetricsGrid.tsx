import { Card, CardContent } from "@/components/ui/card"
import { Droplets, Thermometer, Wind } from "lucide-react"

const metrics = [
  { label: "PM2.5", value: "09", unit: "μg/m³", icon: Wind },
  { label: "PM10", value: "09", unit: "μg/m³", icon: Wind },
  { label: "Temperature", value: "27", unit: "°C", icon: Thermometer },
  { label: "Humidity", value: "54", unit: "%", icon: Droplets },
  { label: "SO2", value: "09", unit: "ppm", icon: Wind },
  { label: "NO2", value: "09", unit: "ppm", icon: Wind },
]

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {metrics.map((metric, index) => (
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
      ))}
    </div>
  )
}

