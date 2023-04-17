import { ForecastWeatherItem, Spinner } from '@components';
import { LOADING_STATUS, SPINNER_SIZE, weatherStatuses } from '@constants';
import { getCurrentHourlyDateByUnixTime, getHHMMLocaledStringDate } from '@utils';
import { useHourlyWeather } from '@hooks';

import { ForecastHourlyWeatherText, ForecastHourlyWeatherTitle } from './styled';

export const ForecastHourlyWeather = () => {
	const { hourlyWeather, hourlyWeatherLoadingStatus } = useHourlyWeather();

	if (hourlyWeatherLoadingStatus === LOADING_STATUS.LOADING) {
		return <Spinner size={SPINNER_SIZE.LARGE} />;
	}

	if (hourlyWeather === null) {
		return null;
	}

	const { temperatureList, weatherCodeList, timeList } = hourlyWeather;

	return (
		<>
			{getCurrentHourlyDateByUnixTime(timeList).map((date, index) => {
				const weatherCode = weatherCodeList[index];

				const { icon, description } = weatherStatuses[weatherCode];

				return (
					<ForecastWeatherItem
						data-test-id="hourly-weather-item"
						key={date.getTime()}
						timestamp={getHHMMLocaledStringDate(date)}
						icon={<img src={icon} alt={description} title={description} />}
					>
						<ForecastHourlyWeatherTitle data-test-id="hourly-weather-title">
							{temperatureList[index].toFixed(0)}&#176;
						</ForecastHourlyWeatherTitle>
						<ForecastHourlyWeatherText>{description}</ForecastHourlyWeatherText>
					</ForecastWeatherItem>
				);
			})}
		</>
	);
};
