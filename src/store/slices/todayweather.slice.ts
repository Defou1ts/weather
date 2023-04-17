import { createSlice } from '@reduxjs/toolkit';

import { LOADING_STATUS } from '@constants';
import type { Coord, TodayWeather, TodayWeatherResponse } from '@interfaces';
import { transformTodayWeatherResponse } from '@utils';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface TodayWeatherState {
	weather: TodayWeather | null;
	loadingStatus: LOADING_STATUS;
}

const initialState: TodayWeatherState = {
	weather: null,
	loadingStatus: LOADING_STATUS.IDLE,
};

export const todayWeatherSlice = createSlice({
	name: 'todayWeather',
	initialState,
	reducers: {
		fetchTodayWeather: (state, action: PayloadAction<Coord>) => {},
		setTodayWeather: (state, action: PayloadAction<TodayWeatherResponse>) => {
			state.weather = transformTodayWeatherResponse(action.payload);
		},
		setTodayLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			state.loadingStatus = action.payload;
		},
	},
});

export const { setTodayWeather, setTodayLoadingStatus, fetchTodayWeather } = todayWeatherSlice.actions;
export default todayWeatherSlice.reducer;
