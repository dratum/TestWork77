import axios from "axios";
const url = "https://api.openweathermap.org/data/2.5/weather";
import { create } from "zustand";
import { WeatherState, weatherDataTypes } from "../lib/types";
import { persist } from "zustand/middleware";

export const useWeatherStore = create<WeatherState>()(
  persist(
    (set) => ({
      weatherData: null,
      favorites: [],
      loading: false,
      error: false,

      // устанавливаем погоду в карточке
      setWeatherData: (weather: weatherDataTypes) =>
        set((state) => ({ ...state, weatherData: weather })),

      // получаем погоду при вводе города
      getWeather: async (city: string) => {
        set({ loading: true });
        try {
          const response = await axios.get(
            `${url}?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&lang=en&units=metric`
          );
          set((state) => ({
            ...state,
            weatherData: response.data,
            error: false,
          }));
        } catch (e) {
          set({ error: true });
          return { message: e };
        } finally {
          set({ loading: false });
        }
      },

      // добавляем город в избранное
      addFavorite: (city: string) =>
        set((state) => ({
          ...state,
          favorites: [...state.favorites, city],
        })),
    }),

    // сохраняем состояние в localStorage
    {
      name: "weather-store",
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !["error"].includes(key))
        ),
    }
  )
);
