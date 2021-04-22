import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ValuesBox, Value, ValueText, ValueDiscount, ValueTotal } from './styles'

export default function ValueToPay() {
  const [count, setCount] = useState({})

  useEffect(() => {
    getCount()
  }, [])
  const getCount = () => {
    axios
      .get('https://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then((res) => {
        setCount(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const calc = count.subTotal + count.shippingTotal - count.discount

  return (
    <div>
      <ValuesBox>
        <Value>
          {' '}
          <ValueText> PRODUTOS </ValueText>{' '}
          <ValueText> R$ {count.subTotal && count.subTotal.toFixed(2)} </ValueText>{' '}
        </Value>
        <Value>
          {' '}
          <ValueText> FRETE </ValueText>{' '}
          <ValueText>R$ {count.shippingTotal && count.shippingTotal.toFixed(2)}</ValueText>
        </Value>
        <Value>
          <ValueDiscount> DESCONTO </ValueDiscount>
          <ValueDiscount> - R$ {count.discount && count.discount.toFixed(2)} </ValueDiscount>
        </Value>
        <Value>
          <ValueTotal>TOTAL </ValueTotal> <ValueTotal> R$ {calc && calc.toFixed(2)} </ValueTotal>
        </Value>
      </ValuesBox>
    </div>
  )
}
