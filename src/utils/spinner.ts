import type { SpinnerSize } from '@types';

export const getSpinnerSize = (size: SpinnerSize) => {
	switch (size) {
		case 's':
			return 16;
		case 'm':
			return 32;
		case 'l':
			return 64;
	}
};
