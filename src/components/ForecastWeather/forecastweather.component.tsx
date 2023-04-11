import { useSelector } from 'react-redux';

import { ForecastDailyWeather, ForecastHourlyWeather } from '@components';
import { selectForecastWeatherType, selectLocation } from '@store';

import { ForecastWeatherWrapper } from './styled';

export const ForecastWeather = () => {
	const forecastWeatherType = useSelector(selectForecastWeatherType);
	const selectedLocation = useSelector(selectLocation);

	if (selectedLocation === null) {
		return <p>Вы отказались от обработки вашей геолокации. Выберите город</p>;
	}

	return (
		<ForecastWeatherWrapper>
			{forecastWeatherType === 'daily' && <ForecastDailyWeather />}
			{forecastWeatherType === 'hourly' && <ForecastHourlyWeather />}
		</ForecastWeatherWrapper>
	);
};
