import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ForecastWeatherItem, Spinner } from '@components';
import { LOADING_STATUS, SPINNER_SIZE, weatherStatuses } from '@constants';
import { getCurrentHourlyDateByUnixTime, getHHMMLocaledStringDate } from '@utils';
import { fetchHourlyWeather, selectHourlyWeather, selectHourlyWeatherLoadingStatus, selectLocation } from '@store';

import { ForecastHourlyWeatherText, ForecastHourlyWeatherTitle } from './styled';

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
		return <Spinner size={SPINNER_SIZE.LARGE} />;
	}

	if (hourlyWeather === null) {
		return null;
	}

	const { weathercode: weatherCodes, temperature_2m: temperature, time } = hourlyWeather.hourly;

	return (
		<>
			{getCurrentHourlyDateByUnixTime(time).map((date, index) => {
				const weatherCode = weatherCodes[index];

				const { icon, description } = weatherStatuses[weatherCode];

				return (
					<ForecastWeatherItem
						data-test-id="hourly-weather-item"
						key={date.getTime()}
						timestamp={getHHMMLocaledStringDate(date)}
						icon={<img src={icon} alt={description} title={description} />}
					>
						<ForecastHourlyWeatherTitle data-test-id="hourly-weather-title">
							{temperature[index].toFixed(0)}&#176;
						</ForecastHourlyWeatherTitle>
						<ForecastHourlyWeatherText>{description}</ForecastHourlyWeatherText>
					</ForecastWeatherItem>
				);
			})}
		</>
	);
};
