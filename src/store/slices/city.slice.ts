import { createSlice } from '@reduxjs/toolkit';

import type { City, CitySearchResponse } from '@interfaces';
import { LOADING_STATUS } from '@constants';
import { transformCityResponse } from '@utils';

import type { PayloadAction } from '@reduxjs/toolkit';

interface CityState {
	currentCity: City | null;
	citySearchResult: City[] | null;
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
		setCurrentCity: (state, action: PayloadAction<City>) => {
			state.currentCity = action.payload;
		},
		setSearchCitiesLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			state.searchCitiesLoadingStatus = action.payload;
		},
		setCitiesSearchResult: (state, action: PayloadAction<CitySearchResponse>) => {
			state.citySearchResult = action.payload.results?.map(transformCityResponse) ?? null;
		},
		fetchCityByName: (state, action: PayloadAction<string>) => {},
	},
});

export const { setCurrentCity, setSearchCitiesLoadingStatus, setCitiesSearchResult, fetchCityByName } =
	citySlice.actions;
export default citySlice.reducer;
