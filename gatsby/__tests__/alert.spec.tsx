import { Alert } from '@/components/alert';
import React from 'react';
import { render } from '@testing-library/react';

describe('alert.tsx', () => {
  const message = 'Testovací message';
  it('message renders correctly', () => {
    const { getByText } = render(<Alert message={message} />);

    expect(getByText(message)).toBeInTheDocument();
  });
  it('button is rendered', () => {
    const { getByTestId } = render(<Alert message={message} link="#" />);
    expect(getByTestId('button-link')).toBeTruthy();
  });
});
