import { Button } from "@/app/components/ui/button";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="bg-gradient-to-b from-sky-400 to-sky-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Monitor Your Environment in Real-Time
          </h1>
          <p className="text-xl mb-6 text-sky-100">
            AeroAware provides accurate, localized data on air quality, weather,
            and radiation levels.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-sky-600 hover:bg-sky-50"
          >
            Learn More
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/Banner.jpeg"
            alt="AeroAware IoT Device"
            className="rounded-lg shadow-xl"
            height={300}
            width={600}
          />
        </div>
      </div>
    </section>
  );
}
