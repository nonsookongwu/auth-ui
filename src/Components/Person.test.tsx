import { render, screen } from '@testing-library/react';
import Person from './Person';

test('renders learn react link', () => {
  render(<Person name='Nonso'/>);
  const linkElement = screen.getByText(/Name is Nonso/i);
  expect(linkElement).toBeInTheDocument();
});
