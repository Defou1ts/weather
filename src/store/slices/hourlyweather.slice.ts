import { createSlice } from '@reduxjs/toolkit';

import { LOADING_STATUS } from '@constants';
import type { Coord, HourlyWeather, HourlyWeatherResponse } from '@interfaces';
import { transformHourlyWeatherResponse } from '@utils';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface HourlyWeatherState {
	weather: HourlyWeather | null;
	loadingStatus: LOADING_STATUS;
}

const initialState: HourlyWeatherState = {
	weather: null,
	loadingStatus: LOADING_STATUS.IDLE,
};

export const hourlyWeatherSlice = createSlice({
	name: 'hourlyWeather',
	initialState,
	reducers: {
		fetchHourlyWeather: (state, action: PayloadAction<Coord>) => {},
		setHourlyWeather: (state, action: PayloadAction<HourlyWeatherResponse>) => {
			state.weather = transformHourlyWeatherResponse(action.payload);
		},
		setHourlyLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			state.loadingStatus = action.payload;
		},
	},
});

export const { fetchHourlyWeather, setHourlyWeather, setHourlyLoadingStatus } = hourlyWeatherSlice.actions;
export default hourlyWeatherSlice.reducer;
