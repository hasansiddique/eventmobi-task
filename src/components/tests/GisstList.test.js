import { render, screen } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import 'jest-enzyme';

import GistsList from "./../GistsList";

configure({ adapter: new Adapter() });

describe('Gists List Tests', function () {
  const searchValue = 'dummy-value';
  const gists = [{id: '123', owner: { login: 'test', avatar_url: 'test' }, files: { 'file1': {language: 'javascript', filename: 'test', type: 'text/plain'} } }];

  test('check for gists list UL element to exist', () => {
    render(
        <GistsList
            gists={gists}
            searchValue={searchValue}
        />
    );
    const linkElement = screen.getByTestId('gists-list')
    expect(linkElement).toBeInTheDocument();
  });
});
