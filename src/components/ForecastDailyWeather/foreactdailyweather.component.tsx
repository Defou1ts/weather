import { ForecastWeatherItem, Spinner } from '@components';
import { LOADING_STATUS, SPINNER_SIZE, weatherStatuses } from '@constants';
import { getDayOfWeekLocaledStringDate } from '@utils';
import { useDailyWeather } from '@hooks';

import { ForecastDailyWeatherText } from './styled';

export const ForecastDailyWeather = () => {
	const { dailyWeather, dailyWeatherLoadingStatus } = useDailyWeather();

	if (dailyWeatherLoadingStatus === LOADING_STATUS.LOADING) {
		return <Spinner data-test-id="daily-weather-spinner" size={SPINNER_SIZE.LARGE} />;
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
						<ForecastDailyWeatherText data-test-id="daily-weather-title">
							{description}
						</ForecastDailyWeatherText>
						<ForecastDailyWeatherText>Max:</ForecastDailyWeatherText>
						<ForecastDailyWeatherText>{temperatureMax[index].toFixed(0)}&#176;</ForecastDailyWeatherText>
						<ForecastDailyWeatherText>Min:</ForecastDailyWeatherText>
						<ForecastDailyWeatherText>{temperatureMin[index].toFixed(0)}&#176;</ForecastDailyWeatherText>
					</ForecastWeatherItem>
				);
			})}
		</>
	);
};
