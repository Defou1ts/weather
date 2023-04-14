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
			<Button data-test-id="set-daily-weather" onClick={handleSwitchForecastWeatherType('daily')}>
				Daily
			</Button>
			<Button data-test-id="set-hourly-weather" onClick={handleSwitchForecastWeatherType('hourly')}>
				Hourly
			</Button>
		</ForecastWeatherSwitchWrapper>
	);
};
