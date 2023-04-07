import type { RootState } from '../store';

export const selectDailyWeather = (state: RootState) => state.dailyWeather.weather;
export const selectDailyWeatherLoadingStatus = (state: RootState) => state.dailyWeather.loadingStatus;
