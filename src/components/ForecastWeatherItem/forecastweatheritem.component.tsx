import { ForecastWeatherItemImageContainer, ForecastWeatherItemText, ForecastWeatherItemWrapper } from './styled';

import type { WeatherItemProps } from './interfaces';

export const ForecastWeatherItem = ({ timestamp, icon, children }: WeatherItemProps) => {
	return (
		<ForecastWeatherItemWrapper>
			<ForecastWeatherItemText>{timestamp}</ForecastWeatherItemText>
			<ForecastWeatherItemImageContainer>{icon}</ForecastWeatherItemImageContainer>
			{children}
		</ForecastWeatherItemWrapper>
	);
};
