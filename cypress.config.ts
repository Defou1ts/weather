/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { defineConfig } from 'cypress';
import webpackPreprocessor from '@cypress/webpack-preprocessor';

import { APP_HOST, APP_PORT } from './src/constants/environment';

export default defineConfig({
	watchForFileChanges: true,
	e2e: {
		baseUrl: `http://${APP_HOST}:${APP_PORT}`,
		screenshotsFolder: 'cypress/report/screenshots',
		reporter: 'mochawesome',
		reporterOptions: {
			html: false,
			json: true,
			reportDir: 'cypress/report',
			reportFilename: 'report',
			overwrite: true,
		},
		setupNodeEvents(on, config) {
			on(
				'file:preprocessor',
				webpackPreprocessor({
					webpackOptions: require('./webpack.config'),
					watchOptions: {},
				})
			);
		},
	},
});
