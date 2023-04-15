import type { RootState } from '../store';

export const selectLocation = (state: RootState) => state.location.location;
