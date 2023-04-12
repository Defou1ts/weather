import { Calendar, Clock, ForecastWeather, ForecastWeatherSwitch, SearchCity, TodayWeather } from '@components';

import { ContentWrapper, Layout, WeatherWrapper } from './styled';

export const Root = () => {
	return (
		<Layout>
			<ContentWrapper>
				<Clock />
				<SearchCity />
				<Calendar />
				<ForecastWeatherSwitch />
				<WeatherWrapper>
					<TodayWeather />
					<ForecastWeather />
				</WeatherWrapper>
			</ContentWrapper>
		</Layout>
	);
};
