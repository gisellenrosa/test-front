import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  Body,
  ImgConfirmation,
  ImgContent,
  Content,
  CustomerBox,
  CustomerInfo,
  InfoText,
  ContentProduct,
  ContentValue,
  ProductandValue,
  Product,
  ContentBox,
  Title,
  Img,
  ProductDescription,
  ProductText
} from './styles'
import NavBar from '../../components/NavBar'
import ValueToPay from '../../components/ValueToPay'
import BuyConfirmation from '../../images/confirmation.png'
import useRequestData from '../../hooks/Products'
import { BASE_URL } from '../../constants/urls'

export default function Confirmation() {
  const items = useRequestData(BASE_URL, [])

  return (
    <Body>
      <NavBar />
      <Content>
        <ImgContent>
          <ImgConfirmation src={BuyConfirmation} />
        </ImgContent>
        <div>
          <Title>PAGAMENTO</Title>
          <CustomerBox>
            <CustomerInfo>
              <InfoText>****.****.****.1234</InfoText>
              <InfoText>GISELLE N ROSA</InfoText>
              <InfoText>10/2021</InfoText>
            </CustomerInfo>
          </CustomerBox>
        </div>
        <ProductandValue>
          <ContentProduct>
            <Title>PRODUTOS</Title>
            <ContentBox>
              {items.map((item) => {
                return (
                  <Product>
                    <Img
                      src={item.product.imageObjects[0].extraLarge}
                      alt={"Foto máscara de reconstrução L'Oréal"}
                    />
                    <ProductDescription>
                      <ProductText> {item.product.name} </ProductText>
                    </ProductDescription>
                  </Product>
                )
              })}
            </ContentBox>
          </ContentProduct>
          <ContentValue>
            <ValueToPay />
          </ContentValue>
        </ProductandValue>
      </Content>
    </Body>
  )
}
