import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { getPersistConfig } from 'redux-deep-persist';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './sagas';
import todayWeatherReducer from './slices/todayweather.slice';
import hourlyWeatherReducer from './slices/hourlyweather.slice';
import dailyWeatherReducer from './slices/dailyweather.slice';
import cityReducer from './slices/city.slice';

import type { ThunkAction, Action } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	todayWeather: todayWeatherReducer,
	hourlyWeather: hourlyWeatherReducer,
	dailyWeather: dailyWeatherReducer,
	city: cityReducer,
});

const persistConfig = getPersistConfig({
	key: 'root',
	storage,
	blacklist: [],
	rootReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
			sagaMiddleware,
		}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
