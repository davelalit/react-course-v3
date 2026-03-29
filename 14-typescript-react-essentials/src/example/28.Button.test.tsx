import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Button from './28.Button';
describe('Button component', () => {
    // it('should render a primary button with the provided text', () => {
    //     // ARRANGE: Render the component
    //     render(<Button variant="primary">Click me!</Button>);
    //     // ACT: Use screen to query the element like a user would
    //     // getByRole is a primary query method for accessibility
    //     const button = screen.getByRole('button', { name: /click me!/i }); // Case-insensitive match for the text content
    //     // ASSERT: Check if the element is in the document
    //     expect(button).toBeInTheDocument();
    //     expect(button).toHaveClass('bg-blue-600'); // Optional: check for specific styling classes
    // });
    it('should call the onClick handler when clicked', async () => {
        // ARRANGE: Create a mock function for the click handler
        const mockOnClick = vi.fn();
        render(<Button variant="secondary" onClick={mockOnClick}>Clickable</Button>);
        // ACT: Simulate a user click event
        const button = screen.getByRole('button', { name: /clickable/i });
        button.click(); // Using .click() is a simple way to fire an event
        // ASSERT: Verify the mock function was called
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
