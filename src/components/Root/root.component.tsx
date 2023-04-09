import { Clock, SearchCity, TodayWeather } from '@components';

import { ContentWrapper, Layout, WeatherWrapper } from './styled';

export const Root = () => {
	return (
		<Layout>
			<ContentWrapper>
				<Clock />
				<SearchCity />
				<WeatherWrapper>
					<TodayWeather />
				</WeatherWrapper>
			</ContentWrapper>
		</Layout>
	);
};
