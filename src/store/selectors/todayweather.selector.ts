import type { RootState } from 'store/store';

export const selectTodayWeather = (state: RootState) => state.todayWeather.weather;
export const selectTodayWeatherLoadingStatus = (state: RootState) => state.todayWeather.loadingStatus;


