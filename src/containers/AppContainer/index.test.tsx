import * as React from 'react';
import { render } from 'react-dom';
import AppContainer from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<AppContainer />, div);
});
   