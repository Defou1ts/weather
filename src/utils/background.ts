import {
	ClearSkyBackgroundImage,
	FewCloudBackgroundImage,
	MistBackgroundImage,
	RainBackgroundImage,
	ShowerRainBackgroundImage,
	SnowBackgroundImage,
	ThunderStormBackgroundImage,
} from '@assets';

export const getBackgroundByWeatherId = (id: number = 800): string => {
	if (id >= 200 && id < 300) {
		return ThunderStormBackgroundImage;
	}
	if (id >= 300 && id < 400) {
		return RainBackgroundImage;
	}
	if (id >= 500 && id < 600) {
		return ShowerRainBackgroundImage;
	}
	if (id >= 600 && id < 700) {
		return SnowBackgroundImage;
	}
	if (id >= 600 && id < 700) {
		return MistBackgroundImage;
	}
	if (id === 800) {
		return ClearSkyBackgroundImage;
	}

	if (id > 800 && id < 900) {
		return FewCloudBackgroundImage;
	}

	return ClearSkyBackgroundImage;
};
