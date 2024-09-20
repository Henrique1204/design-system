import React from 'react';

import { render, screen, describe, it, expect } from '@tests/setupTests';

import TextField from '.';

describe('TextField', () => {
  it('renderiza com o label correto', () => {
    render(<TextField label="Campo" />);
    expect(screen.getByText('Campo')).toBeInTheDocument();
  });
});
