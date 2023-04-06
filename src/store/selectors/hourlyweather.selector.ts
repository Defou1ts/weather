import type { RootState } from '../store';

export const selectHourlyWeather = (state: RootState) => state.hourlyWeather.weather;
export const selectHourlyWeatherLoadingStatus = (state: RootState) => state.hourlyWeather.loadingStatus;
