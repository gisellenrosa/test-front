import React from 'react'
import { render } from '@testing-library/react'
import Cart from '../../pages/Cart'

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }) => children,
    NavLink: ({ children }) => children
  }
})

describe('Cart Page', () => {
  it('should be able to render button to "SEGUIR PARA PAGAMENTO"', () => {
    const { getByText } = render(<Cart />)
    const buttonGoToPayment = getByText('SEGUIR PARA PAGAMENTO')
    expect(buttonGoToPayment)
    const { g } = render(<Cart />)
  })
})
