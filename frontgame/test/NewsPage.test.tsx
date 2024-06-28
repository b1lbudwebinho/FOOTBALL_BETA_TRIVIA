import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter  } from 'react-router-dom';
import NewsPage from '../src/Components/NewsPage/NewsPage';

describe('NewsPage', () => {
    it('renders main sections correctly', () => {
        render(
            <MemoryRouter>
                <NewsPage />
            </MemoryRouter>
        );
        expect(screen.getByText('Top Story')).toBeInTheDocument();
        expect(screen.getByAltText('Top Story Image')).toBeInTheDocument();
        
        expect(screen.getByText('Rozgrywki Europejskie')).toBeInTheDocument();
        expect(screen.getByText('Nadchodzące wydarzenia')).toBeInTheDocument();
        expect(screen.getByText('Sports')).toBeInTheDocument();

        const readMoreLinks = screen.getAllByText('Read More');
        expect(readMoreLinks).toHaveLength(10);

        readMoreLinks.forEach(link => {
            expect(link).toBeInTheDocument();
        });
    });
})