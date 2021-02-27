import { render, screen } from '@testing-library/react';
import Home from '@screens/Home';

describe('Home', () => {
    it('should renders hello text', () => {
      render(<Home />);
      const helloText = screen.getByText(/^Hello ElectronicX$/i);
      expect(helloText).toBeDefined();
    });
});
