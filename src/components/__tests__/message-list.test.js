import React from 'react'
import { render } from '@testing-library/react'
import MessageList from '../message-list'

test('renders error column', () => {
  const { getByText } = render(<MessageList />);
  const linkElement = getByText(/error type 1/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders warning column', () => {
  const { getByText } = render(<MessageList />);
  const linkElement = getByText(/warning type 2/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders info column', () => {
  const { getByText } = render(<MessageList />);
  const linkElement = getByText(/info type 3/i);
  expect(linkElement).toBeInTheDocument();
});
