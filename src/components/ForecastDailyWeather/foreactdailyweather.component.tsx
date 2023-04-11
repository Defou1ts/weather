import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ForecastWeatherItem, Spinner } from '@components';
import { LOADING_STATUS, weatherStatuses } from '@constants';
import { getDayOfWeekLocaledStringDate } from '@utils';
import { fetchDailyWeather, selectDailyWeather, selectDailyWeatherLoadingStatus, selectLocation } from '@store';

import { ForecastDailyWeatherText } from './styled';

export const ForecastDailyWeather = () => {
	const dailyWeather = useSelector(selectDailyWeather);
	const dailyWeatherLoadingStatus = useSelector(selectDailyWeatherLoadingStatus);
	const selectedLocation = useSelector(selectLocation);

	const dispatch = useDispatch();

	useEffect(() => {
		if (selectedLocation !== null) {
			dispatch(fetchDailyWeather(selectedLocation));
		}
	}, [selectedLocation]);

	if (dailyWeatherLoadingStatus === LOADING_STATUS.LOADING) {
		return <Spinner size="l" />;
	}

	if (dailyWeather === null) {
		return null;
	}

	const {
		weathercode: weatherCodes,
		temperature_2m_max: temperatureMax,
		temperature_2m_min: temperatureMin,
	} = dailyWeather.daily;

	return (
		<>
			{dailyWeather?.daily.time.map((time, index) => {
				const weatherCode = weatherCodes[index];

				const dateOfDayOfWeek = new Date(time * 1000);
				const { icon, description } = weatherStatuses[weatherCode];

				return (
					<ForecastWeatherItem
						key={time}
						timestamp={getDayOfWeekLocaledStringDate(dateOfDayOfWeek)}
						icon={<img src={icon} alt={description} title={description} />}
					>
						<ForecastDailyWeatherText>{description}</ForecastDailyWeatherText>
						<ForecastDailyWeatherText>Max:</ForecastDailyWeatherText>
						<ForecastDailyWeatherText>{temperatureMax[index]}&#176;</ForecastDailyWeatherText>
						<ForecastDailyWeatherText>Min:</ForecastDailyWeatherText>
						<ForecastDailyWeatherText>{temperatureMin[index]}&#176;</ForecastDailyWeatherText>
					</ForecastWeatherItem>
				);
			})}
		</>
	);
};
