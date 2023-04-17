import { useTodayWeather } from '@hooks';

import { TodayWeatherImage, TodayWeatherText, TodayWeatherWrapper } from './styled';

export const TodayWeather = () => {
	const { todayWeather, replaceContent } = useTodayWeather();

	if (replaceContent !== null) {
		return <TodayWeatherWrapper data-test-id="today-weather-spinner-wrapper">{replaceContent}</TodayWeatherWrapper>;
	}

	if (todayWeather === null) {
		return null;
	}

	const { iconCode, description, feelsLike, temperature, cityName } = todayWeather;

	return (
		<TodayWeatherWrapper data-test-id="today-weather-wrapper">
			<TodayWeatherText data-test-id="today-weather-title">Today</TodayWeatherText>
			<TodayWeatherText data-test-id="today-weather-text">{cityName}</TodayWeatherText>
			<TodayWeatherImage
				data-test-id="today-weather-image"
				src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
				alt={description}
				title={description}
			/>
			<TodayWeatherText>{description}</TodayWeatherText>
			<TodayWeatherText>{temperature.toFixed(0)}&#176;</TodayWeatherText>
			<TodayWeatherText>feels like {feelsLike.toFixed(0)}&#176;</TodayWeatherText>
		</TodayWeatherWrapper>
	);
};
