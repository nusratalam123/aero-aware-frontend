import { Button } from "@/app/components/ui/button";

export default function MobileAppSection() {
  return (
    <section
      id="app"
      className="py-20 bg-gradient-to-b from-sky-100 to-sky-200"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <picture>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/section%20five-4g1QXrbVP21YAXcjRd1ROmCdCgU0WV.png"
              alt="AeroAware Mobile App Interface"
              className="w-full max-w-sm mx-auto"
            />
          </picture>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-bold mb-6 text-sky-900">
            Mobile Application
          </h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-white rounded-full p-2 shadow-md">
                <span className="text-sky-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-sky-900">
                  Sign Up For Free
                </h3>
                <p className="text-gray-600">
                  Create your free account in a matter of minutes with our
                  awesome sign up process.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white rounded-full p-2 shadow-md">
                <span className="text-sky-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-sky-900">
                  Start Browsing Your Home Page
                </h3>
                <p className="text-gray-600">
                  Access real-time air quality data, weather updates, and
                  personalized recommendations.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white rounded-full p-2 shadow-md">
                <span className="text-sky-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-sky-900">
                  AI-Powered Predictions
                </h3>
                <p className="text-gray-600">
                  Get smart alerts and forecasts powered by our advanced AI
                  algorithms.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex gap-4">
            <Button className="bg-sky-600 hover:bg-sky-700">
              Download for iOS
            </Button>
            <Button className="bg-sky-600 hover:bg-sky-700">
              Download for Android
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
