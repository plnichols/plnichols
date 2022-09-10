import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

test('renders content and the children', () => {
  render(<Layout>foo</Layout>);
  expect(screen.getByText('foo')).toBeInTheDocument();
});
