import React from 'react';
import {shallow} from 'enzyme';

import '../setup-env.js'; // Setup Enzyme & Adapter

import Title from '../../client/components/Title';

describe('<Title />', () => {
    test('renders Title component without crashing', () => {
        const wrTitleer = shallow(<Title />)
    });
})