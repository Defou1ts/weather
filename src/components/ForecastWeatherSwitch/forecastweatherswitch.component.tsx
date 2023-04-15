import { useDispatch } from 'react-redux';

import type { ForecastWeatherType } from '@types';
import { setForecastWeatherType } from '@store';
import { Button } from '@components';

import { ForecastWeatherSwitchWrapper } from './styled';

export const ForecastWeatherSwitch = () => {
	const dispatch = useDispatch();

	const handleSwitchForecastWeatherType = (key: ForecastWeatherType) => () => {
		dispatch(setForecastWeatherType(key));
	};

	return (
		<ForecastWeatherSwitchWrapper>
			<Button onClick={handleSwitchForecastWeatherType('daily')}>Daily</Button>
			<Button onClick={handleSwitchForecastWeatherType('hourly')}>Hourly</Button>
		</ForecastWeatherSwitchWrapper>
	);
};
