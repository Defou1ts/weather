import { getDateLocaledStringDate, getTimeLocaledStringDate } from '@utils';
import { useCurrentDate } from '@hooks';

import { ClockText, ClockWrapper } from './styled';

export const Clock = () => {
	const date = useCurrentDate();

	return (
		<ClockWrapper>
			<ClockText>{getTimeLocaledStringDate(date)}</ClockText>
			<ClockText>{getDateLocaledStringDate(date)}</ClockText>
		</ClockWrapper>
	);
};
