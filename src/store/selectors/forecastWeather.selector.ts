import type { RootState } from 'store/store';

export const selectForecastWeatherType = (state: RootState) => state.forecastWeather.forecastWeatherType;
