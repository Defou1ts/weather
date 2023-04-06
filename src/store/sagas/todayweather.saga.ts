import { call, put, takeEvery } from 'redux-saga/effects';

import { LOADING_STATUS } from '@constants';
import { openWeatherApi } from '@api';
import type { Coord, TodayWeather } from '@interfaces';

import { fetchTodayWeather, setTodayLoadingStatus, setTodayWeather } from '../slices/todayweather.slice';

import type { PayloadAction } from '@reduxjs/toolkit';

function* fetchTodayWeatherWorker(action: PayloadAction<Coord>) {
	yield put(setTodayLoadingStatus(LOADING_STATUS.LOADING));
	try {
		const data: TodayWeather = yield call(
			openWeatherApi.getTodayWeatherByCoords,
			action.payload.lon,
			action.payload.lat
		);
		yield put(setTodayWeather(data));
		yield put(setTodayLoadingStatus(LOADING_STATUS.IDLE));
	} catch (error) {
		yield put(setTodayLoadingStatus(LOADING_STATUS.ERROR));
	}
}

export function* todayWeatherWatcher() {
	yield takeEvery(fetchTodayWeather.type, fetchTodayWeatherWorker);
}
