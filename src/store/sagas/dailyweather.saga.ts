import { call, put, takeEvery } from 'redux-saga/effects';

import { LOADING_STATUS } from '@constants';
import { openMeteoApi } from '@api';
import type { Coord, DailyWeather } from '@interfaces';

import { fetchDailyWeather, setDailyLoadingStatus, setDailyWeather } from '../slices/dailyweather.slice';

import type { PayloadAction } from '@reduxjs/toolkit';

function* fetchDailyWeatherWorker(action: PayloadAction<Coord>) {
	yield put(setDailyLoadingStatus(LOADING_STATUS.LOADING));
	try {
		const data: DailyWeather = yield call(openMeteoApi.getDailyWeather, action.payload.lon, action.payload.lat);
		yield put(setDailyWeather(data));
		yield put(setDailyLoadingStatus(LOADING_STATUS.IDLE));
	} catch (error) {
		yield put(setDailyLoadingStatus(LOADING_STATUS.ERROR));
	}
}

export function* dailyWeatherWatcher() {
	yield takeEvery(fetchDailyWeather.type, fetchDailyWeatherWorker);
}
