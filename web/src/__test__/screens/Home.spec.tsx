/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@screens/Home';

describe('Home', () => {
  it('should renders hello text', () => {
    render(<Home />);
    const helloText = screen.getByText(/^home$/i);
    expect(helloText).toBeDefined();
  });
});
