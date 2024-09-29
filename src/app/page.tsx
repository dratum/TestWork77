"use client";
import CardCityWeather from "./ui/cardCityWeather";
import Input from "./ui/input/input";
import React from "react";

export default function Home() {
  return (
    <main className='mt-5 gap-1 d-flex flex-row flex-column align-items-center justify-content-center'>
      <h2>Weather in:</h2>
      <Input />
      <CardCityWeather />
    </main>
  );
}
