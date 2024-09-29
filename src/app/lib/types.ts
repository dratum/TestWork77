export interface weatherDataTypes {
  name: string;
  country: string;
  city: {
    name: string;
    country: string;
  };
  list: {
    dt_txt: string;
    main: {
      temp: number;
      humidity: number;
      pressure: number;
    };
    wind: {
      speed: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
  }[];

  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  sys: {
    country: string;
  };
}

export interface WeatherState {
  state: {
    weatherData: weatherDataTypes | null;
    favorites: string[];
  };
  loading: boolean;
  error: boolean;
  setWeatherData: (weather: weatherDataTypes) => void;
  getWeather: (city: string) => void;
  addFavorite: (city: string) => void;
}
