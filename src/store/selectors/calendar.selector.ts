import type { RootState } from 'store/store';

export const selectCalendarEvents = (state: RootState) => state.calendar.events;
export const selectCalendarAuth = (state: RootState) => state.calendar.isAuth;
