import { render, screen } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import 'jest-enzyme';

import SearchInput from "./../SearchInput";

configure({ adapter: new Adapter() });

describe('Spinner Tests', function () {
  test('check for input element to exist', () => {
    const recordsExist = false;
    const handleOnChange = jest.fn();
    render(
        <SearchInput
            recordsExist={recordsExist}
            handleOnChange={handleOnChange}
        />
    );
    const linkElement = screen.getByTestId('search-input')
    expect(linkElement).toBeInTheDocument();
  });
});
