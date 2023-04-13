import { useSelector } from 'react-redux';

import { Calendar, Clock, ForecastWeather, ForecastWeatherSwitch, SearchCity, TodayWeather } from '@components';
import { selectTodayWeather } from '@store';
import { getBackgroundByWeatherId } from '@utils';

import { ContentWrapper, Layout, WeatherWrapper } from './styled';

export const Root = () => {
	const todayWeather = useSelector(selectTodayWeather);

	return (
		<Layout background={getBackgroundByWeatherId(todayWeather?.weather[0].id)}>
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
