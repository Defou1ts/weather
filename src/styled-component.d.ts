import 'styled-components';
import type { Theme } from '@interfaces';

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
