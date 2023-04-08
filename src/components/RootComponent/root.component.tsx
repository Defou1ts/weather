import { Clock } from '@components';

import { ContentWrapper, Layout } from './styled';

export const RootComponent = () => {
	return (
		<Layout>
			<ContentWrapper>
				<Clock />
			</ContentWrapper>
		</Layout>
	);
};
