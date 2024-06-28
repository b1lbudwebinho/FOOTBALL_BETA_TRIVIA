import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Game from '../src/Components/Game/Game'; // Adjust the import path as necessary
import fetchMock from 'jest-fetch-mock';

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('Game Component', () => {
  test('renders loading state initially', () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    render(<Game />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  //TODO: Other tests w.
});
