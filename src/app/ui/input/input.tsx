import React, { useState } from "react";
import { useWeatherStore } from "../../stores/weatherStore";
import styles from "./input.module.scss";

function Input() {
  const [city, setCity] = useState("");
  const { getWeather, error } = useWeatherStore();

  const handleKeyPress = (event: React.FormEvent) => {
    event.preventDefault();
    getWeather(city);
    if (!error) {
      setCity("");
    }
  };

  return (
    <>
      <form
        onSubmit={handleKeyPress}
        className={`input-group mb-3 shadow-sm  ${styles.width}`}
      >
        <input
          placeholder='Enter city name...'
          type='text'
          className='form-control'
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-default'
          value={city}
          onChange={(event) => setCity(event.target.value)}
          required
        />

        <button
          className='input-group-text'
          id='inputGroup-sizing-default'
          type='submit'
        >
          Search
        </button>
      </form>
      {error ? (
        <p className='text-danger block'>Enter the correct city!</p>
      ) : null}
    </>
  );
}

export default Input;
