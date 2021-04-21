import React from 'react'
import { useFormik } from 'formik'
import {
  CreditCardBox,
  Content,
  Title,
  Fields,
  Button,
  LinkButton,
  Input,
  Label,
  InfoCardValidityCvv,
  ErrorMsg
} from './styles'
import NavBar from '../../components/NavBar'
import ValueToPay from '../../components/ValueToPay'
import * as Yup from 'yup'
import valid from 'card-validator'
import { useHistory } from 'react-router-dom'

export default function Payment() {
  const history = useHistory('')
  const CreditCard = () => {
    const formik = useFormik({
      initialValues: { cardNumber: '', cardName: '', cardValidity: '', cvv: '' },
      validationSchema: Yup.object({
        cardNumber: Yup.string()
          .required('Necessário digitar número do cartão')
          .test(
            'test-number',
            ' Número do Cartão incorreto',
            (value) => valid.number(value).isValid
          ),
        cardName: Yup.string()
          .min(5, 'Deve conter no mínimo 5 caracteres')
          .max(30, 'Deve ter no maximo 30 caracteres ')
          .required('O nome deve ser igual ao do cartão'),
        cardValidity: Yup.string()
          .required('É necessário digitar a validade do cartão')
          .test('test-cardValidity', 'Validade do cartão inválida', (value) => {
            return value && value.match(/([0-9]{2})\/([0-9]{2})/)
          }),
        cvv: Yup.string()
          .length(3, 'Deve conter 3 números')
          .required('O código deve ser igual ao do cartão')
      }),
      onSubmit: (values) => {
        const body = {
          ...values,
          cardNumber: '****.****.****.*' + values.cardNumber.substr(-3)
        }
        history.push('/confirmation', body)
      }
    })
    return (
      <div>
        <NavBar />
        <form onSubmit={formik.handleSubmit}>
          <Content>
            <div>
              <Title>CARTÃO DE CRÉDITO</Title>
              <CreditCardBox>
                <Fields>
                  <div>
                    <Label htmlFor="cardNumber">Número do Cartão:</Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      type="text"
                      placeholder="____.____.____.____"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.handleSubmit}
                      errors={formik.touched.cardNumber && formik.errors.cardNumber}
                    />
                    {formik.touched.cardNumber && formik.errors.cardNumber ? (
                      <ErrorMsg>{formik.errors.cardNumber}</ErrorMsg>
                    ) : null}
                  </div>
                  <div>
                    <Label htmlFor="cardName">Nome do Titular:</Label>
                    <Input
                      id="cardName"
                      name="cardName"
                      type="text"
                      placeholder="Como no cartão"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.handleSubmit}
                      errors={formik.touched.cardName && formik.errors.cardName}
                    />
                    {formik.touched.cardName && formik.errors.cardName ? (
                      <ErrorMsg>{formik.errors.cardName}</ErrorMsg>
                    ) : null}
                  </div>
                  <InfoCardValidityCvv>
                    <div>
                      <Label htmlFor="cardValidity">Validade (mês/ano):</Label>
                      <Input
                        id="cardValidity"
                        name="cardValidity"
                        type="text"
                        placeholder="__/____"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.handleSubmit}
                        errors={formik.touched.cardValidity && formik.errors.cardValidity}
                      />
                      {formik.touched.cardValidity && formik.errors.cardValidity ? (
                        <ErrorMsg>{formik.errors.cardValidity}</ErrorMsg>
                      ) : null}
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV:</Label>
                      <Input
                        id="cvv"
                        name="cvv"
                        type="number"
                        placeholder="___"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.handleSubmit}
                        errors={formik.touched.cvv && formik.errors.cvv}
                      />
                      {formik.touched.cvv && formik.errors.cvv ? (
                        <ErrorMsg>{formik.errors.cvv}</ErrorMsg>
                      ) : null}
                    </div>
                  </InfoCardValidityCvv>
                </Fields>
              </CreditCardBox>
            </div>
            <div>
              <ValueToPay />
              <LinkButton>
                <Button type="submit" disabled={!(formik.isValid && formik.dirty)}>
                  FINALIZAR PEDIDO
                </Button>
              </LinkButton>
            </div>
          </Content>
        </form>
      </div>
    )
  }
  return (
    <div>
      <CreditCard />
    </div>
  )
}
