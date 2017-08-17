import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { createAppStore } from './store';
import AppContainer from './containers/AppContainer';

const store = createAppStore();

render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('root') as HTMLElement);

registerServiceWorker();
