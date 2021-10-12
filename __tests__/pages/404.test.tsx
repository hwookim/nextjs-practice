import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '@/pages/404';
import { useRouter } from 'next/router';

jest.mock('next/router');

describe('404 page', () => {
  const mockRouter = useRouter as jest.Mock;

  it('replace page to "/"', () => {
    const replace = jest.fn();
    mockRouter.mockReturnValue({ replace });
    render(<NotFound />);

    expect(replace).toBeCalledWith('/');
  });
});
