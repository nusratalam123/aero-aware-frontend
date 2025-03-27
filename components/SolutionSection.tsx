export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 bg-gradient-to-b from-sky-50 to-sky-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="/innovation.jpeg?height=300&width=400" alt="AeroAware Solution" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4 text-sky-900">Our Innovative Solution</h2>
          <p className="text-sky-800 mb-4">
            AeroAware combines IoT devices, cloud computing, and AI to provide real-time environmental data. Our system
            collects, analyzes, and delivers accurate information on air quality, weather conditions, and radiation
            levels.
          </p>
          <ul className="list-disc list-inside text-sky-700 space-y-2">
            <li>Real-time data collection</li>
            <li>Cloud-based analysis</li>
            <li>AI-powered predictions</li>
            <li>Personalized health alerts</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

