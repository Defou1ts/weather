import { all } from 'redux-saga/effects';

import type { AllEffect } from 'redux-saga/effects';

export function* rootSaga(): Generator<AllEffect<never>, void, unknown> {
	yield all([]);
}
