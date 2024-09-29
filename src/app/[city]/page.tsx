"use client";
import { useGetCityWeather } from "../lib/actions";
import PageCityWeather from "../ui/pageCityWeather";

export default function City({ params }: { params: { city: string } }) {
  // Получение данных о погоде для выбранного города помощью SWR
  const { data, isLoading } = useGetCityWeather(params.city);

  return <PageCityWeather weatherData={data} isLoading={isLoading} />;
}
