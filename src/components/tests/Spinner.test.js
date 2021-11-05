import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import 'jest-enzyme';

import Spinner from "./../Spinner";

configure({ adapter: new Adapter() });

describe('Spinner Tests', function () {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
        <Spinner />,
    );
  });

  test('should have a spinner element', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
