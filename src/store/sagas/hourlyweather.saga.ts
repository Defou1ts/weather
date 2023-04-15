import { call, put, takeEvery } from 'redux-saga/effects';

import { LOADING_STATUS } from '@constants';
import { openMeteoApi } from '@api';
import type { Coord, HourlyWeather } from '@interfaces';

import { fetchHourlyWeather, setHourlyLoadingStatus, setHourlyWeather } from '../slices/hourlyweather.slice';

import type { PayloadAction } from '@reduxjs/toolkit';

function* fetchHourlyWeatherWorker(action: PayloadAction<Coord>) {
	yield put(setHourlyLoadingStatus(LOADING_STATUS.LOADING));
	try {
		const data: HourlyWeather = yield call(openMeteoApi.getHourlyWeather, action.payload.lon, action.payload.lat);
		yield put(setHourlyWeather(data));
		yield put(setHourlyLoadingStatus(LOADING_STATUS.IDLE));
	} catch (error) {
		yield put(setHourlyLoadingStatus(LOADING_STATUS.ERROR));
	}
}

export function* hourlyWeatherWatcher() {
	yield takeEvery(fetchHourlyWeather.type, fetchHourlyWeatherWorker);
}
