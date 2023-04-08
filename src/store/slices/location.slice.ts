import { createSlice } from '@reduxjs/toolkit';

import type { Coord } from '@interfaces';

import type { PayloadAction } from '@reduxjs/toolkit';

interface LocationState {
	location: Coord | null;
}

const initialState: LocationState = {
	location: null,
};

const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {
		setLocation: (state, action: PayloadAction<Coord>) => {
			state.location = action.payload;
		},
	},
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
