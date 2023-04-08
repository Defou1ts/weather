import { Clock, SearchCity } from '@components';

import { ContentWrapper, Layout } from './styled';

export const Root = () => {
	return (
		<Layout>
			<ContentWrapper>
				<Clock />
				<SearchCity />
			</ContentWrapper>
		</Layout>
	);
};
