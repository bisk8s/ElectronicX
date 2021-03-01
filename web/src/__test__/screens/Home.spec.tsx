/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@screens/Home';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/',
  }),
}));

describe('Home', () => {
  it('should renders Home text', () => {
    render(<Home />);
    const helloText = screen.getByText(/^Home$/i);
    expect(helloText).toBeDefined();
  });
});
