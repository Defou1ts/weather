import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ErrorBoundary } from '@components';
import { store, persistor } from '@store';

import { App } from './App';

const container = document.getElementById('root');

if (container === null) {
	throw new Error('Container element not found');
}

const root = createRoot(container);

root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</PersistGate>
	</Provider>
);
