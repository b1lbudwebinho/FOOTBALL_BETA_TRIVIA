import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import ContactCard from '../src/Components/ContactCard/ContactCard';
import '@testing-library/jest-dom';

const customRender = (ui: React.ReactElement, options?: any) =>
  render(
    <Router>
      <MantineProvider>{ui}</MantineProvider>
    </Router>,
    options
  );

describe('ContactCard', () => {
  it('renders the ContactCard component', () => {
    act(() => {
      customRender(<ContactCard />);
    });

    expect(screen.getByText('Zapisz się do Newslettera!')).toBeInTheDocument();
  });

  it('displays error message for invalid email', () => {
    act(() => {
      customRender(<ContactCard />);
    });

    const input = screen.getByPlaceholderText('Twój email'); // Assuming this is the placeholder text
    fireEvent.change(input, { target: { value: 'invalid-email' } });

    const button = screen.getByText('Zapisz się');
    fireEvent.click(button);

    expect(screen.getByText(/Proszę podać prawidłowy adres e-mail/i)).toBeInTheDocument();
  });

  it('displays success message for valid email', () => {
    act(() => {
      customRender(<ContactCard />);
    });

    const input = screen.getByPlaceholderText('Twój email'); // Assuming this is the placeholder text
    fireEvent.change(input, { target: { value: 'valid.email@example.com' } });

    const button = screen.getByText('Zapisz się');
    fireEvent.click(button);

    expect(screen.getByText('E-mail sent ;)')).toBeInTheDocument();
  });
});
