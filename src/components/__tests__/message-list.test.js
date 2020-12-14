import React from 'react'
import { render } from '@testing-library/react'
import MessageList from '../message-list'

describe('message-list', () => {
  it('is a blank slate to write tests in', () => {
    const { container } = render(<MessageList />)
    expect(container).not.toBeVisible()
  })
})
