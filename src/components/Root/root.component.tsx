import { Clock } from '@components';

import { ContentWrapper, Layout } from './styled';

export const Root = () => {
	return (
		<Layout>
			<ContentWrapper>
				<Clock />
			</ContentWrapper>
		</Layout>
	);
};
