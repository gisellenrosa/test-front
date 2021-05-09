import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Cart from '../../pages/Cart'

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockHistoryPush
    }),
    Link: ({ children }) => children,
    NavLink: ({ children }) => children
  }
})

describe('Cart Page', () => {
  it('should be able to render button to "SEGUIR PARA PAGAMENTO"', () => {
    const { getByText } = render(<Cart />)
    const buttonGoToPayment = getByText('SEGUIR PARA PAGAMENTO')
    fireEvent.click(buttonGoToPayment)

    expect(mockHistoryPush).toHaveBeenCalledWith('/payment')
  })
})
