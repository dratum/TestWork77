import useSWR from "swr";
const url = "https://api.openweathermap.org/data/2.5/forecast";
const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const useGetCityWeather = (city: string) => {
  const { data, error, isLoading } = useSWR(
    `${url}?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&lang=en&units=metric`,
    fetcher,
    { revalidateOnFocus: false }
  );
  return { data, error, isLoading };
};
