import Link from "next/link";
import Image from "next/image";
import { useWeatherStore } from "../stores/weatherStore";
import styles from "./ui.module.scss";
import Spinner from "./spinner/spinner";

export default function CardCityWeather() {
  const weatherData = useWeatherStore((state) => state.weatherData);
  const favCities = useWeatherStore((state) => state.favorites);
  const { loading, addFavorite } = useWeatherStore();

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className='d-flex flex-row gap-5 align-items-flex-start justify-content-center'>
      {weatherData ? (
        <div className={`shadow card mb-3 ${styles.width}`}>
          <div className='card-header d-flex flex-row justify-content-between'>
            <span>
              {weatherData
                ? weatherData.name + ", " + weatherData.sys.country
                : "-"}
            </span>
            <Link href={`/${weatherData ? weatherData.name : "/"}`}>
              <span>view details</span>
            </Link>
          </div>
          <div className='card-body'>
            <h5 className='card-title'>
              {weatherData ? weatherData.main.temp.toFixed(0) : "-"}°C
            </h5>
            <Image
              src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}.png`}
              alt='icon_weather'
              width={50}
              height={50}
            />
            <p className='card-text'>
              {weatherData ? weatherData.weather[0].description : "-"}
            </p>
          </div>
          <div className='card-footer'>
            {weatherData && (
              <button
                className='btn btn-outline-secondary'
                onClick={() => weatherData && addFavorite(weatherData.name)}
                hidden={favCities.includes(weatherData.name)}
              >
                + add to favorites
              </button>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
