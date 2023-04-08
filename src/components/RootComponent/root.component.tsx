import { Clocks } from '@components';

import { ContentWrapper, Layout } from './styled';

export const RootComponent = () => {
	return (
		<Layout>
			<ContentWrapper>
				<Clocks />
			</ContentWrapper>
		</Layout>
	);
};
