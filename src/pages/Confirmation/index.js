import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  Body,
  ImgConfirmation,
  ImgContent,
  CustomerBox,
  CustomerInfo,
  InfoText,
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

export default function Confirmation() {
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
        <ImgContent>
          <ImgConfirmation src={BuyConfirmation} />
        </ImgContent>
        <div>
          <Title>PAGAMENTO</Title>
        </div>
        <CustomerBox>
          <CustomerInfo>
            <InfoText>****.****.****.1234</InfoText>
            <InfoText>GISELLE N ROSA</InfoText>
            <InfoText>10/2021</InfoText>
          </CustomerInfo>
        </CustomerBox>
        <div>
          <Title>PRODUTOS</Title>
        </div>
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
      </div>
      <div>
        <ValueToPay />
      </div>
    </Body>
  )
}
