import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  Body,
  Product,
  ProductsBox,
  Title,
  Img,
  ProductDescription,
  ProductText,
  ProductValue,
  Button,
  LinkButton
} from './styles'
import NavBar from '../../components/NavBar'
import ValueToPay from '../../components/ValueToPay'

export default function Cart() {
  const [items, setItems] = useState([])

  useEffect(() => {
    getItems()
  }, [])

  const getItems = () => {
    axios
      .get('https://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then((res) => {
        setItems(res.data.items)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Body>
      <NavBar />
      <div>
        <div>
          <Title>PRODUTOS</Title>
        </div>
        <ProductsBox>
          {items.map((item) => {
            return (
              <Product>
                <Img
                  src={item.product.imageObjects[0].extraLarge}
                  alt={"Foto máscara de reconstrução L'Oréal"}
                />
                <ProductDescription>
                  <ProductText> {item.product.name} </ProductText>
                  <ProductValue>
                    {' '}
                    R${' '}
                    {item.product.priceSpecification.price &&
                      item.product.priceSpecification.price.toFixed(2)}{' '}
                  </ProductValue>
                </ProductDescription>
              </Product>
            )
          })}
        </ProductsBox>
      </div>
      <div>
        <ValueToPay />
      </div>
      <LinkButton to="/payment">
        <Button> SEGUIR PARA PAGAMENTO</Button>
      </LinkButton>
    </Body>
  )
}
