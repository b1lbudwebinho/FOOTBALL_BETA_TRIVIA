import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import TeamsCard from '../src/Components/TeamsCard/TeamsCard';

jest.mock('axios');

describe('TeamsCard Component', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state initially', () => {
    render(<TeamsCard />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error message on API failure', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

    render(<TeamsCard />);
    
    await waitFor(() => {
      expect(screen.getByText('Error loading data. Please try again later.')).toBeInTheDocument();
    });
  });

  it('renders team data correctly on API success', async () => {
    const mockTeams = [
      { id: 1, name: 'Team A', founded: 1900, venue: 'Stadium A', crestUrl: '/logoA.png' },
      { id: 2, name: 'Team B', founded: 1901, venue: 'Stadium B', crestUrl: '/logoB.png' },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: { teams: mockTeams } });

    render(<TeamsCard />);
    
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    mockTeams.forEach(team => {
      expect(screen.getByText(team.name)).toBeInTheDocument();
      expect(screen.getByText(`Founded: ${team.founded}`)).toBeInTheDocument();
      expect(screen.getByText(`Venue: ${team.venue}`)).toBeInTheDocument();
      expect(screen.getByAltText(team.name)).toHaveAttribute('src', team.crestUrl);
    });
  });
});
