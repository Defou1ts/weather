import { useTodayWeather } from '@hooks';

import { TodayWeatherImage, TodayWeatherText, TodayWeatherWrapper } from './styled';

export const TodayWeather = () => {
	const { todayWeather, replaceContent } = useTodayWeather();

	if (replaceContent !== null) {
		return <TodayWeatherWrapper>{replaceContent}</TodayWeatherWrapper>;
	}

	if (todayWeather === null) {
		return null;
	}

	const { weather, main, name } = todayWeather;
	const { icon, description } = weather[0];
	const { feels_like: feelsLike, temp } = main;

	return (
		<TodayWeatherWrapper>
			<TodayWeatherText>Today</TodayWeatherText>
			<TodayWeatherText>{name}</TodayWeatherText>
			<TodayWeatherImage
				src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
				alt={description}
				title={description}
			/>
			<TodayWeatherText>{description}</TodayWeatherText>
			<TodayWeatherText>{temp.toFixed(0)}&#176;</TodayWeatherText>
			<TodayWeatherText>feels like {feelsLike.toFixed(0)}&#176;</TodayWeatherText>
		</TodayWeatherWrapper>
	);
};
