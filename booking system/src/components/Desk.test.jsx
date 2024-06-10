import { render, screen, fireEvent } from '@testing-library/react';
import Desk from './Desk';

test('renders desks', () => {
  render(<Desk />);
  const deskElements = screen.getAllByText(/Individual|Team/);
  expect(deskElements.length).toBe(15);
});

test('books a desk', () => {
  render(<Desk />);
  const deskElement = screen.getAllByText(/Individual|Team/)[0];
  fireEvent.click(deskElement);
  expect(deskElement).toHaveClass('booked');
});
