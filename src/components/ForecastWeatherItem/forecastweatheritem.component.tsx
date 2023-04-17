import { ForecastWeatherItemImageContainer, ForecastWeatherItemText, ForecastWeatherItemWrapper } from './styled';

import type { ForecastWeatherItemProps } from './interfaces';

export const ForecastWeatherItem = ({ timestamp, iconProps, children }: ForecastWeatherItemProps) => {
	return (
		<ForecastWeatherItemWrapper>
			<ForecastWeatherItemText>{timestamp}</ForecastWeatherItemText>
			<ForecastWeatherItemImageContainer>
				<img {...iconProps} />
			</ForecastWeatherItemImageContainer>
			{children}
		</ForecastWeatherItemWrapper>
	);
};
