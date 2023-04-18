import { createSlice } from '@reduxjs/toolkit';

import type { CalendarEvent } from '@interfaces';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface CalendarState {
	events: CalendarEvent[];
	isAuth: boolean;
}

const initialState: CalendarState = {
	events: [],
	isAuth: false,
};

const calendarSlice = createSlice({
	name: 'calendar',
	initialState,
	reducers: {
		setCalendarEvents: (state, action: PayloadAction<CalendarEvent[]>) => {
			state.events = action.payload;
		},
		setCalendarAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload;
		},
	},
});

export const { setCalendarEvents, setCalendarAuth } = calendarSlice.actions;
export default calendarSlice.reducer;
