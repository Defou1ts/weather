import { call, put, takeLatest } from 'redux-saga/effects';

import { LOADING_STATUS } from '@constants';
import type { CitySearchResponse } from '@interfaces';
import { openMeteoApi } from '@api';

import { fetchCityByName, setCitiesSearchResult, setSearchCitiesLoadingStatus } from '../slices/city.slice';

import type { PayloadAction } from '@reduxjs/toolkit';

function* fetchCityByNameWorker(action: PayloadAction<string>) {
	yield put(setSearchCitiesLoadingStatus(LOADING_STATUS.LOADING));
	try {
		const data: CitySearchResponse = yield call(openMeteoApi.searchCityByName, action.payload);
		yield put(setCitiesSearchResult(data));
		yield put(setSearchCitiesLoadingStatus(LOADING_STATUS.IDLE));
	} catch (error) {
		yield put(setSearchCitiesLoadingStatus(LOADING_STATUS.ERROR));
	}
}

export function* cityWatcher() {
	yield takeLatest(fetchCityByName.type, fetchCityByNameWorker);
}
