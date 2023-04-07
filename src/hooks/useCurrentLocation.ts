import { useEffect, useState } from 'react';

import type { Coord } from '@interfaces';

export const useCurrentLocation = (options: PositionOptions = {}) => {
	const [location, setLocation] = useState<Coord | null>(null);
	const [error, setError] = useState<GeolocationPositionError | null>(null);

	const handleSuccess = ({ coords }: GeolocationPosition) => {
		const { latitude, longitude } = coords;

		setLocation({
			lat: latitude,
			lon: longitude,
		});
	};

	const handleError = (error: GeolocationPositionError) => {
		setError(error);
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);
	}, []);

	return { location, error };
};
