import { Button, CalendarEvent } from '@components';
import { useCalendar } from '@hooks';

import { CalendarEventsWrapper, CalendarWrapper } from './styled';

export const Calendar = () => {
	const { isAuth, events, handleAuth, handleSignOut } = useCalendar();

	return (
		<CalendarWrapper>
			{isAuth && (
				<Button data-test-id="calendar-sign-out" onClick={handleSignOut}>
					Sign out
				</Button>
			)}
			{!isAuth && (
				<Button data-test-id="calendar-sign-in" onClick={handleAuth}>
					Sign in
				</Button>
			)}
			<CalendarEventsWrapper>
				{events.map((event) => (
					<CalendarEvent event={event} key={event.id} />
				))}
			</CalendarEventsWrapper>
		</CalendarWrapper>
	);
};
