import { createSlice } from '@reduxjs/toolkit';

import { LOADING_STATUS } from '@constants';
import type { Coord, DailyWeather, DailyWeatherResponse } from '@interfaces';
import { transformDailyWeatherResponse } from '@utils';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface DailyWeatherState {
	weather: DailyWeather | null;
	loadingStatus: LOADING_STATUS;
}

const initialState: DailyWeatherState = {
	weather: null,
	loadingStatus: LOADING_STATUS.IDLE,
};

export const dailyWeatherSlice = createSlice({
	name: 'dailyWeather',
	initialState,
	reducers: {
		fetchDailyWeather: (state, action: PayloadAction<Coord>) => {},
		setDailyWeather: (state, action: PayloadAction<DailyWeatherResponse>) => {
			state.weather = transformDailyWeatherResponse(action.payload);
		},
		setDailyLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			state.loadingStatus = action.payload;
		},
	},
});

export const { fetchDailyWeather, setDailyWeather, setDailyLoadingStatus } = dailyWeatherSlice.actions;
export default dailyWeatherSlice.reducer;
