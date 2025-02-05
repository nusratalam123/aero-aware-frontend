import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesSection() {
  const services = [
    { title: "Air Quality Monitoring", description: "Real-time tracking of air pollutants and particulate matter." },
    { title: "Weather Forecasting", description: "Accurate local weather predictions using AI and IoT data." },
    { title: "Radiation Detection", description: "Continuous monitoring of environmental radiation levels." },
    {
      title: "Health Alerts",
      description: "Personalized notifications based on environmental conditions and user health profiles.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-sky-100 to-sky-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-sky-900">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur border-sky-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-sky-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sky-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

