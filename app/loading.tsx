export default function ColorfulLoader() {
  return (
    <div className="h-full px-space16 p-12">
      <div className="mb-10">
        <div className="mb-6 flex flex-col gap-2">
          <div className="h-8 w-64 animate-pulse rounded-md bg-gray-200"></div>
          <div className="h-5 w-48 animate-pulse rounded-md bg-gray-100"></div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={`category-${index}`}
              className="flex flex-col items-center justify-center gap-2 rounded-md border p-4"
            >
              <div className="h-12 w-12 animate-pulse rounded-full bg-gray-200"></div>
              <div className="h-4 w-16 animate-pulse rounded-md bg-gray-200"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10 flex h-64 w-full animate-pulse items-center justify-center rounded-lg bg-gradient-to-r from-orange-100 via-pink-100 to-blue-100 md:h-80">
        <div className="bg-white/30 h-16 w-48 animate-pulse rounded-lg"></div>
      </div>

      <div className="mb-10">
        <div className="mb-6 h-7 w-56 animate-pulse rounded-md bg-gray-200"></div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={`product-${index}`}
              className="overflow-hidden rounded-md border"
            >
              <div className="aspect-square w-full animate-pulse bg-gray-200"></div>
              <div className="space-y-2 p-3">
                <div className="flex items-center justify-between">
                  <div className="h-4 w-16 animate-pulse rounded-md bg-gray-200"></div>
                  <div className="flex gap-2">
                    <div className="h-5 w-5 animate-pulse rounded-full bg-gray-200"></div>
                    <div className="h-5 w-5 animate-pulse rounded-full bg-gray-200"></div>
                  </div>
                </div>
                <div className="h-5 w-3/4 animate-pulse rounded-md bg-gray-200"></div>
                <div className="h-4 w-1/2 animate-pulse rounded-md bg-gray-200"></div>
                <div className="flex items-center gap-2 pt-2">
                  <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200"></div>
                  <div className="h-4 w-24 animate-pulse rounded-md bg-gray-200"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
