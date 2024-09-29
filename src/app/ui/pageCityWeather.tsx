import Image from "next/image";
import { weatherDataTypes } from "../lib/types";
import Spinner from "./spinner/spinner";

export default function PageCityWeather({
  weatherData,
  isLoading,
}: {
  weatherData: weatherDataTypes;
  isLoading: boolean;
}) {
  // форматируем дату
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      day: "numeric",
      month: "long",
    });
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <h3 className='mt-5 text-center'>
        Weather forecast in {weatherData.city.name} for three days:
      </h3>
      {weatherData && (
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-12'>
              <div className='shadow card mb-3'>
                <div className='card-header'>
                  <h3>{weatherData ? weatherData.city.name : "-"}</h3>
                  <h5>{weatherData ? weatherData.city.country : "-"}</h5>
                </div>
                <div className='card-body'>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th scope='col'>День</th>
                        <th scope='col'>Температура</th>
                        <th scope='col'>Описание</th>
                        <th scope='col'>Влажность</th>
                        <th scope='col'>Давление</th>
                        <th scope='col'>Скорость ветра</th>
                      </tr>
                    </thead>
                    <tbody>
                      {weatherData
                        ? weatherData.list
                            .filter((item) => {
                              const date = new Date(item.dt_txt);
                              return date.getUTCHours() === 12;
                            })
                            .slice(0, 3)
                            .map((item, index: number) => (
                              <tr key={index}>
                                <td>
                                  {formatDate(item.dt_txt)}
                                  <Image
                                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                                    alt='icon_weather'
                                    width={50}
                                    height={50}
                                  />
                                </td>
                                <td>{item.main.temp.toFixed(0)}</td>
                                <td>{item.weather[0].description}</td>
                                <td>{item.main.humidity + " %"}</td>
                                <td>{item.main.pressure + " hPa"}</td>
                                <td>{item.wind.speed + " m/s"}</td>
                              </tr>
                            ))
                        : "-"}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
