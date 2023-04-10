import type { WeatherItemProps } from './interfaces';

export const ForecastWeatherItem = ({ timestamp, icon, children }: WeatherItemProps) => {
	return (
		<div>
			<p>{timestamp}</p>
			{icon}
			{children}
		</div>
	);
};
