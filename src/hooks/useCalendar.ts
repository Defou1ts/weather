import { useEffect } from 'react';

import { gapi } from 'gapi-script';
import { useDispatch, useSelector } from 'react-redux';

import { calendarApiConfig, calendarEventsConfig } from '@constants';
import type { CalendarApiEventsResponse } from '@interfaces';
import { selectCalendarAuth, selectCalendarEvents, setCalendarAuth, setCalendarEvents } from '@store';

export const useCalendar = () => {
	const isAuth = useSelector(selectCalendarAuth);
	const events = useSelector(selectCalendarEvents);
	const dispatch = useDispatch();

	useEffect(() => {
		gapi.load('client:auth2', () => {
			gapi.client.init(calendarApiConfig);
		});
	}, []);

	const handleAuth = () => {
		gapi.load('client:auth2', async () => {
			await gapi.auth2.getAuthInstance().signIn();
			dispatch(setCalendarAuth(true));

			const response: CalendarApiEventsResponse = await gapi.client.calendar.events.list(calendarEventsConfig);
			const events = response.result.items;
			dispatch(setCalendarEvents(events));
		});
	};

	const handleSignOut = () => {
		gapi.load('client:auth2', async () => {
			await gapi.auth2.getAuthInstance().signOut();
			dispatch(setCalendarAuth(false));
			dispatch(setCalendarEvents([]));
		});
	};

	return { isAuth, events, handleAuth, handleSignOut };
};
