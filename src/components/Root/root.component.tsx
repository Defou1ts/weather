import { Clock, SearchCity } from '@components';

import { ContentWrapper, Layout, WeatherWrapper } from './styled';

export const Root = () => {
	return (
		<Layout>
			<ContentWrapper>
				<Clock />
				<SearchCity />
				<WeatherWrapper></WeatherWrapper>
			</ContentWrapper>
		</Layout>
	);
};
