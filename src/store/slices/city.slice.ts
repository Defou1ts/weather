import { createSlice } from '@reduxjs/toolkit';

import type { CityResult, CitySearchResult } from '@interfaces';
import { LOADING_STATUS } from '@constants';

import type { PayloadAction } from '@reduxjs/toolkit';

interface CityState {
	currentCity: CityResult | null;
	citySearchResult: CitySearchResult | null;
	searchCitiesLoadingStatus: LOADING_STATUS;
}

const initialState: CityState = {
	currentCity: null,
	citySearchResult: null,
	searchCitiesLoadingStatus: LOADING_STATUS.IDLE,
};

export const citySlice = createSlice({
	name: 'city',
	initialState,
	reducers: {
		setCurrentCity: (state, action: PayloadAction<CityResult>) => {
			state.currentCity = action.payload;
		},
		setSearchCitiesLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			state.searchCitiesLoadingStatus = action.payload;
		},
		setCitiesSearchResult: (state, action: PayloadAction<CitySearchResult>) => {
			state.citySearchResult = action.payload;
		},
		fetchCityByName: (state, action: PayloadAction<string>) => {},
	},
});

export const { setCurrentCity, setSearchCitiesLoadingStatus, setCitiesSearchResult, fetchCityByName } =
	citySlice.actions;
export default citySlice.reducer;
