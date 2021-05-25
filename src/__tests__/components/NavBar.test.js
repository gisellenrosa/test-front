import React from 'react'
import { render } from '@testing-library/react'
import NavLink from '../../components/NavBar'

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockHistoryPush
    }),
    Link: ({ children }) => children,
    NavLink: ({ children }) => children
  }
})
describe('StyledLink ', () => {
  it('should be able to render header button ', () => {
    const { getByText } = render(<NavLink />)
    const cartButton = getByText('SACOLA')

    expect(cartButton)
  })
})
