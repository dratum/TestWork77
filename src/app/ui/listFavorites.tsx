import Link from "next/link";
import { useWeatherStore } from "../stores/weatherStore";
import styles from "./ui.module.scss";

export default function ListFavorites() {
  const favorites = useWeatherStore((state) => state.favorites);
  return (
    <div className='d-flex flex-column justify-content-center align-items-center m-5 '>
      <h1>Favorites Cities</h1>
      <div className={`list-group ${styles.width} shadow`}>
        {favorites.map((city, index) => (
          <Link
            className='list-group-item list-group-item-action'
            href={`/${city}`}
            key={index}
          >
            {city}
          </Link>
        ))}
      </div>
    </div>
  );
}
