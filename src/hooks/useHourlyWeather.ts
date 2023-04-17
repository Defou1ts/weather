import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { selectHourlyWeather, selectHourlyWeatherLoadingStatus, selectLocation, fetchHourlyWeather } from '@store';

export const useHourlyWeather = () => {
	const hourlyWeather = useSelector(selectHourlyWeather);
	const hourlyWeatherLoadingStatus = useSelector(selectHourlyWeatherLoadingStatus);
	const selectedLocation = useSelector(selectLocation);

	const dispatch = useDispatch();

	useEffect(() => {
		if (selectedLocation !== null) {
			dispatch(fetchHourlyWeather(selectedLocation));
		}
	}, [selectedLocation]);

	return { hourlyWeather, hourlyWeatherLoadingStatus };
};
