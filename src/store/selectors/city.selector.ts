import type { RootState } from '../store';

export const selectCurrentCity = (state: RootState) => state.city.currentCity;
export const selectSearchCitiesLoadingStatus = (state: RootState) => state.city.searchCitiesLoadingStatus;
export const selectCitySearchResult = (state: RootState) => state.city.citySearchResult;
