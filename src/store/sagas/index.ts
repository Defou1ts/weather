import { all } from 'redux-saga/effects';

import { todayWeatherWatcher } from './todayweather.saga';


export function* rootSaga(){
	yield all([todayWeatherWatcher()]);
}
