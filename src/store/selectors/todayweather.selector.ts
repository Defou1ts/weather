import type { RootState } from '../store';

export const selectTodayWeather = (state: RootState) => state.todayWeather.weather;
export const selectTodayWeatherLoadingStatus = (state: RootState) => state.todayWeather.loadingStatus;


