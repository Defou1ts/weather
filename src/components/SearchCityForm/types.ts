import type { ChangeEvent } from 'react';

export type HandleResetForm = (
	handleReset: (event?: ChangeEvent<HTMLInputElement>) => void
) => (event?: ChangeEvent<HTMLInputElement>) => void;

export type HandleChangeForm = (
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void
) => (event: ChangeEvent<HTMLInputElement>) => void;
