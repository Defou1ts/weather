import type { RootState } from 'store/store';

export const selectHourlyWeather = (state: RootState) => state.hourlyWeather.weather;
export const selectHourlyWeatherLoadingStatus = (state: RootState) => state.hourlyWeather.loadingStatus;
