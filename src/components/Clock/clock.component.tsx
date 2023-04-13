import { getDateLocaledStringDate, getTimeLocaledStringDate } from '@utils';
import { useCurrentDate } from '@hooks';

import { ClockText, ClockWrapper } from './styled';

export const Clock = () => {
	const date = useCurrentDate();

	return (
		<ClockWrapper>
			<ClockText data-test-id="time-clock">{getTimeLocaledStringDate(date)}</ClockText>
			<ClockText data-test-id="date-clock">{getDateLocaledStringDate(date)}</ClockText>
		</ClockWrapper>
	);
};
