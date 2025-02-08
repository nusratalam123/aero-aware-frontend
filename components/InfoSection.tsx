export default function InfoSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-sky-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
          <img
            src="/placeholder.svg?height=300&width=400"
            alt="AeroAware Data Analysis"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-sky-900">Empowering Decision-Making</h2>
          <p className="text-sky-800 mb-4">
            AeroAware provides comprehensive environmental data to help individuals, businesses, and governments make
            informed decisions. Our system offers:
          </p>
          <ul className="list-disc list-inside text-sky-700 space-y-2">
            <li>Detailed analytical reports</li>
            <li>Historical data comparisons</li>
            <li>Trend analysis and predictions</li>
            <li>Integration with smart city initiatives</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

