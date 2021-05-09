import React from 'react'
import { fireEvent, getByLabelText, render } from '@testing-library/react'
import Payment from '../../pages/Payment'

const mockedHistoryPush = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush
    }),
    Link: ({ children }) => children,
    NavLink: ({ children }) => children
  }
})

describe('Payment Page ', () => {
  it('should be able to pay', () => {
    const { getByPlaceholderText, getByText } = render(<Payment />)

    const cardNumberField = getByPlaceholderText('____.____.____.____')
    const cardNameField = getByPlaceholderText('Como no cartão')
    const cardValidityField = getByPlaceholderText('__/____')
    const cvvField = getByPlaceholderText('___')
    const ConfirmationButton = getByText('FINALIZAR PEDIDO')

    fireEvent.change(cardNumberField, { target: { value: '5555666677778884' } })
    fireEvent.change(cardNameField, { target: { value: 'Giselle Rosa' } })
    fireEvent.change(cardValidityField, { target: { value: '09/22' } })
    fireEvent.change(cvvField, { target: { value: '123' } })

    fireEvent.click(ConfirmationButton)
    expect(ConfirmationButton)
  })
})
