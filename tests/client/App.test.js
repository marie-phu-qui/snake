import React from 'react';
import {shallow} from 'enzyme';

import '../setup-env.js'; // Setup Enzyme & Adapter

import App from '../../client/components/App';

describe('<App />', () => {
    test('renders App component without crashing', () => {
        const wrapper = shallow(<App />)
    });
})