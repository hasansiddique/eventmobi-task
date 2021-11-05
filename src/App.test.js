import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import 'jest-enzyme';

import App from './App';
import Spinner from "./components/Spinner";
import SearchInput from "./components/SearchInput";

configure({ adapter: new Adapter() });

describe('APP Tests', function () {
  let wrapper;

  const getDataFromAPI = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
        <App />,
    );
  });

  test('should have a top heading', () => {
    expect(wrapper.find('h3').first().text()).toEqual('Type Username to get list fo Gists');
  });

  test('should not call get data from API immediately', () => {
    wrapper.find(SearchInput).at(0).props().handleOnChange('#asdf');
    expect(getDataFromAPI).not.toHaveBeenCalled();
  });

  test('should call get data from API', () => {
    wrapper.find(SearchInput).at(0).props().handleOnChange('#data');
    setTimeout(() => {
      expect(wrapper.instance().getDataFromAPI).toHaveBeenCalledWith('#data');
    }, 600);
  });

  test('should show spinner if data is fetching', () => {
    const stateSetter = jest.fn();
    jest
        .spyOn(React, 'useState')
        .mockImplementation(() => [false, stateSetter])
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });


});
