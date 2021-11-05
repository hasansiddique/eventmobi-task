import { render, screen } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import 'jest-enzyme';

import GistFiles from "./../GistFiles";

configure({ adapter: new Adapter() });

describe('Gist Files Tests', function () {
  const gistId = 'dummy-id';
  const gistFiles = { 'file1': {language: 'javascript', filename: 'test', type: 'text/plain'} };

  test('Heading text to exist', () => {

    render(
        <GistFiles
            gistId={gistId}
            gistFiles={gistFiles}
        />
    );
    const linkElement = screen.getByText('File Types:')
    expect(linkElement).toBeInTheDocument();
  });

  test('check for files list UL element to exist', () => {
    render(
        <GistFiles
            gistId={gistId}
            gistFiles={gistFiles}
        />
    );
    const linkElement = screen.getByTestId('files-list')
    expect(linkElement).toBeInTheDocument();
  });
});
