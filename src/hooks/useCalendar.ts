import { useEffect, useState } from 'react';

import { gapi } from 'gapi-script';

import { calendarApiConfig, calendarEventsConfig } from '@constants';
import type { CalendarApiEventsResponse, CalendarEvent } from '@interfaces';

export const useCalendar = () => {
	const [isAuth, setIsAuth] = useState<boolean>(false);
	const [events, setEvents] = useState<CalendarEvent[]>([]);

	useEffect(() => {
		gapi.load('client:auth2', () => {
			gapi.client.init(calendarApiConfig);
		});
	}, []);

	const handleAuth = () => {
		gapi.load('client:auth2', async () => {
			await gapi.auth2.getAuthInstance().signIn();
			setIsAuth(true);

			const response: CalendarApiEventsResponse = await gapi.client.calendar.events.list(calendarEventsConfig);
			const events = response.result.items;
			setEvents(events);
		});
	};

	const handleSignOut = () => {
		gapi.load('client:auth2', async () => {
			await gapi.auth2.getAuthInstance().signOut();
			setIsAuth(false);
			setEvents([]);
		});
	};

	return { isAuth, events, handleAuth, handleSignOut };
};
