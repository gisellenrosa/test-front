import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  Body,
  Product,
  ProductsBox,
  Content,
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
import useRequestData from '../../hooks/Products'
import { BASE_URL } from '../../constants/urls'

export default function Cart() {
  const items = useRequestData(BASE_URL, [])

  return (
    <Body>
      <NavBar />
      <Content>
        <div>
          <Title>PRODUTOS</Title>
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
          <LinkButton to="/payment">
            <Button> SEGUIR PARA PAGAMENTO</Button>
          </LinkButton>
        </div>
      </Content>
    </Body>
  )
}
