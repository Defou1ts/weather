import { useState, useRef, useEffect } from 'react';

export const useCurrentDate = () => {
	const [date, setDate] = useState<Date>(new Date());
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const handleIntervalTick = () => {
		setDate(new Date());
	};

	const handleClearInterval = () => {
		if (intervalRef.current !== null) {
			clearInterval(intervalRef.current);
		}
	};

	useEffect(() => {
		intervalRef.current = setInterval(handleIntervalTick, 1000);

		return handleClearInterval;
	}, []);

	return date;
};
