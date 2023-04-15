import { createSlice } from '@reduxjs/toolkit';

import type { ForecastWeatherType } from '@types';

import type { PayloadAction } from '@reduxjs/toolkit';

interface ForecastWeatherState {
	forecastWeatherType: ForecastWeatherType;
}

const initialState: ForecastWeatherState = {
	forecastWeatherType: 'daily',
};

const forecastWeatherSlice = createSlice({
	name: 'forecastWeather',
	initialState,
	reducers: {
		setForecastWeatherType: (state, action: PayloadAction<ForecastWeatherType>) => {
			state.forecastWeatherType = action.payload;
		},
	},
});

export const { setForecastWeatherType } = forecastWeatherSlice.actions;
export default forecastWeatherSlice.reducer;
