import { all } from 'redux-saga/effects';

import { todayWeatherWatcher } from './todayweather.saga';
import { hourlyWeatherWatcher } from './hourlyweather.saga';

export function* rootSaga() {
	yield all([todayWeatherWatcher(), hourlyWeatherWatcher()]);
}
