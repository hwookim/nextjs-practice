import React from 'react';
import { render } from '@testing-library/react';
import Post from '../../../src/pages/posts/[id]';
import { useRouter } from 'next/router';

jest.mock('next/router');

describe('Posts', () => {
  const mockRouter = useRouter as jest.Mock;

  describe('with id', () => {
    const id = 'hi';
    mockRouter.mockReturnValue({ query: { id } });
    it('renders id', () => {
      const { container } = render(<Post />);

      expect(container.textContent).toContain(id);
    });
  });
});
