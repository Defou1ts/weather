import { useState } from 'react';

import { useSelector } from 'react-redux';

import { ForecastDailyWeather, ForecastHourlyWeather } from '@components';
import { selectLocation } from '@store';

import { ForecastWeatherWrapper } from './styled';

import type { WeatherType } from './types';

export const ForecastWeather = () => {
	const [weatherType, setWeatherType] = useState<WeatherType>('hourly');

	const selectedLocation = useSelector(selectLocation);

	if (selectedLocation === null) {
		return <p>Вы отказались от обработки вашей геолокации. Выберите город</p>;
	}

	return (
		<ForecastWeatherWrapper>
			{weatherType === 'daily' && <ForecastDailyWeather />}
			{weatherType === 'hourly' && <ForecastHourlyWeather />}
		</ForecastWeatherWrapper>
	);
};
