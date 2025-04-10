import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const locations = [
  {
    name: "This Device",
    aqi: 43,
    temp: "28°C",
    humidity: 458,
    pm25: 29,
    pm10: 123,
  },
  { name: "City", aqi: 201 },
  { name: "State", aqi: 105 },
  { name: "Country", aqi: 168 },
];

export default function AQIComparison() {
  function getAQIColor(aqi: number): string {
    if (aqi <= 50) return "text-green-500";
    if (aqi <= 100) return "text-yellow-500";
    if (aqi <= 150) return "text-orange-500";
    if (aqi <= 200) return "text-red-500";
    return "text-purple-500";
  }

  return (
    <Card className="bg-white/80 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-sky-900">
          Average AQI
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {locations.map((location, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sky-900">{location.name}</span>
            <div className="flex items-center gap-2">
              <span
                className={`text-lg font-semibold ${getAQIColor(location.aqi)}`}
              >
                AQI {location.aqi}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
