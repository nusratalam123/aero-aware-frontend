export type AirQualityType = {
  id: number;
  location: string;
  latitude: number;
  longitude: number;
  aqi: number;
  pm25: number;
  pm10: number;
  no2: number;
  so2: number | null;
  co: number | null;
  temperature: number;
  humidity: number;
  windSpeed: number;
  createdAt: string;
  updatedAt: string;
};
