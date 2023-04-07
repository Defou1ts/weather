import { all } from 'redux-saga/effects';

import { todayWeatherWatcher } from './todayweather.saga';
import { hourlyWeatherWatcher } from './hourlyweather.saga';
import { dailyWeatherWatcher } from './dailyweather.saga';

export function* rootSaga() {
	yield all([todayWeatherWatcher(), hourlyWeatherWatcher(), dailyWeatherWatcher()]);
}
