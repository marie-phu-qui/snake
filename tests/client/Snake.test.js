import React from 'react';
import {shallow} from 'enzyme';

import '../setup-env.js'; // Setup Enzyme & Adapter

import Snake from '../../client/components/Snake';

describe('<Snake />', () => {
    test('renders Snake component without crashing', () => {
        const wrapper = shallow(<Snake />)
    });
})