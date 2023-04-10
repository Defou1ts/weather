import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ForecastWeatherItem, Spinner } from '@components';
import { LOADING_STATUS, weatherStatuses } from '@constants';
import { getTimeLocaledStringDate } from '@utils';
import { fetchHourlyWeather, selectHourlyWeather, selectHourlyWeatherLoadingStatus, selectLocation } from '@store';

import { ForecastHourlyWeatherText } from './styled';

export const ForecastHourlyWeather = () => {
	const hourlyWeather = useSelector(selectHourlyWeather);
	const hourlyWeatherLoadingStatus = useSelector(selectHourlyWeatherLoadingStatus);
	const selectedLocation = useSelector(selectLocation);

	const dispatch = useDispatch();

	useEffect(() => {
		if (selectedLocation !== null) {
			dispatch(fetchHourlyWeather(selectedLocation));
		}
	}, [selectedLocation]);

	if (hourlyWeatherLoadingStatus === LOADING_STATUS.LOADING) {
		return <Spinner size="l" />;
	}

	if (hourlyWeather === null) {
		return null;
	}

	const { weathercode: weatherCodes, temperature_2m: temperature } = hourlyWeather.hourly;

	return (
		<>
			{hourlyWeather?.hourly.time.slice(0, 7).map((time, index) => {
				const weatherCode = weatherCodes[index];

				const dateOfDayOfWeek = new Date(time * 1000);
				const { icon, description } = weatherStatuses[weatherCode];

				return (
					<ForecastWeatherItem
						key={time}
						timestamp={getTimeLocaledStringDate(dateOfDayOfWeek)}
						icon={<img src={icon} alt={description} title={description} />}
					>
						<ForecastHourlyWeatherText>{temperature[index]}&#176;</ForecastHourlyWeatherText>
					</ForecastWeatherItem>
				);
			})}
		</>
	);
};
