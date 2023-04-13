import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
	fetchTodayWeather,
	selectLocation,
	selectTodayWeather,
	selectTodayWeatherLoadingStatus,
	setLocation,
} from '@store';
import { Spinner } from '@components';
import { LOADING_STATUS, SPINNER_SIZE } from '@constants';

import { useCurrentLocation } from './useCurrentLocation';

export const useTodayWeather = () => {
	const dispatch = useDispatch();

	const todayWeather = useSelector(selectTodayWeather);
	const todayWeatherLoadingStatus = useSelector(selectTodayWeatherLoadingStatus);
	const selectedLocation = useSelector(selectLocation);

	const { location } = useCurrentLocation();

	useEffect(() => {
		if (location !== null) {
			dispatch(setLocation(location));
		}
	}, [location]);

	useEffect(() => {
		if (selectedLocation !== null) {
			dispatch(fetchTodayWeather(selectedLocation));
		}
	}, [selectedLocation]);

	if (selectedLocation === null) {
		return {
			todayWeather,
			replaceContent: <p>Вы отказались от обработки вашей геолокации. Выберите город</p>,
		};
	}

	if (todayWeatherLoadingStatus === LOADING_STATUS.LOADING) {
		return {
			todayWeather,
			replaceContent: <Spinner size={SPINNER_SIZE.LARGE} />,
		};
	}

	return { todayWeather, replaceContent: null };
};
