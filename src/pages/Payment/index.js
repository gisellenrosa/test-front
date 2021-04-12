import React from 'react'
import { useFormik } from 'formik'
import {
  Product,
  CreditCardBox,
  Content,
  Title,
  Form,
  Button,
  LinkButton,
  Input,
  InputType,
  Label,
  LabelType,
  Field,
  InfoCardValidityCvv
} from './styles'
import NavBar from '../../components/NavBar'
import ValueToPay from '../../components/ValueToPay'

export default function Payment() {
  const CreditCard = () => {
    const formik = useFormik({
      initialValues: { cardNumber: '', cardName: '', cardValidity: '', cvv: '' },
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2))
      }
    })
    return (
      <div>
        <div>
          <Title>CARTÃO DE CRÉDITO</Title>
          <CreditCardBox>
            <Product>
              <Form onSubmit={formik.handleSubmit}>
                <Field>
                  <Label htmlFor="cardNumber">Número do Cartão:</Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    type="text"
                    placeholder="____.____.____.____"
                    onChange={formik.handleChange}
                    value={formik.values.handleSubmit}
                  />
                </Field>
                <Field>
                  <Label htmlFor="cardName">Nome do Titular:</Label>
                  <Input
                    id="cardName"
                    name="cardName"
                    type="text"
                    placeholder="Como no cartão"
                    onChange={formik.handleChange}
                    value={formik.values.handleSubmit}
                  />
                </Field>
                <InfoCardValidityCvv>
                  <Field>
                    <LabelType htmlFor="cardValidity">Validade (mês/ano):</LabelType>
                    <InputType
                      id="cardValidity"
                      name="cardValidity"
                      type="text"
                      placeholder="__/____"
                      onChange={formik.handleChange}
                      value={formik.values.handleSubmit}
                    />
                  </Field>
                  <Field>
                    <LabelType htmlFor="cvv">CVV:</LabelType>
                    <InputType
                      id="cvv"
                      name="cvv"
                      type="number"
                      placeholder="___"
                      onChange={formik.handleChange}
                      value={formik.values.handleSubmit}
                    />
                  </Field>
                </InfoCardValidityCvv>
              </Form>
            </Product>
          </CreditCardBox>
        </div>
      </div>
    )
  }
  return (
    <div>
      <NavBar />
      <Content>
        <CreditCard />
        <div>
          <ValueToPay />
          <LinkButton to="/confirmation">
            <Button> FINALIZAR PEDIDO</Button>
          </LinkButton>
        </div>
      </Content>
    </div>
  )
}
