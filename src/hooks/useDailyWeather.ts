import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectDailyWeather, selectDailyWeatherLoadingStatus, selectLocation, fetchDailyWeather } from '@store';

export const useDailyWeather = () => {
	const dailyWeather = useSelector(selectDailyWeather);
	const dailyWeatherLoadingStatus = useSelector(selectDailyWeatherLoadingStatus);
	const selectedLocation = useSelector(selectLocation);

	const dispatch = useDispatch();

	useEffect(() => {
		if (selectedLocation !== null) {
			dispatch(fetchDailyWeather(selectedLocation));
		}
	}, [selectedLocation]);

	return { dailyWeather, dailyWeatherLoadingStatus };
};
