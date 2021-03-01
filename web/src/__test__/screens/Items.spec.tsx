/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Items from '@screens/Items';

describe('Items', () => {
  it('should renders Items text', () => {
    render(<Items />);
    const helloText = screen.getByText(/^Items$/i);
    expect(helloText).toBeDefined();
  });
});
