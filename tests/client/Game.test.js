import React from 'react';
import {shallow} from 'enzyme';

import '../setup-env.js'; // Setup Enzyme & Adapter

import Game from '../../client/components/Game';

describe('<Game />', () => {
    test('renders Game component without crashing', () => {
        const wrapper = shallow(<Game />)
    });
})