import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Title = styled.h4`
  margin: 10px 0 0 20px;
  font-size: 1em;
  color: #9c9c9c;
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`
export const Content = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
  }
`

export const CreditCardBox = styled.div`
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.2);
  padding: 5px;
  margin: 5px 10px 15px 10px;
  display: grid;
  justify-content: center;
  @media (min-width: 1024px) {
    display: flex;
    flex-grow: 1;
  }
`
export const Form = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`

export const Product = styled.div`
  border-radius: 3px;
  margin: 10px 5px;
  padding: 5px;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`

export const Field = styled.div`
  display: grid;
`

export const Label = styled.label`
  display: grid;
  color: rgb(205, 205, 205);
  font-size: 0.8em;
  margin-left: 10px;
  font-weight: bold;
  @media (min-width: 1024px) {
    font-size: 0.9em;
    margin-top: 20px;
  }
`

export const LabelType = styled.label`
  display: grid;
  color: rgb(205, 205, 205);
  background-color: rgb(255, 255, 255);
  font-size: 0.8em;
  font-weight: bold;
  @media (min-width: 1024px) {
    font-size: 0.9em;
    margin-top: 20px;
  }
`

export const Input = styled.input`
  display: flex;
  flex: 1;
  justify-content: center;
  box-shadow: inset 0 0 0.3em rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 15px 0;
  margin: 5px 10px;
  border: none;
  :focus {
    outline: none !important;
    border: 2px solid rgb(177, 80, 152);
    box-shadow: none;
  }
  ::-webkit-input-placeholder {
    color: rgb(225, 232, 239);
    font-size: 14px;
    padding: 10px;
  }
  :-moz-placeholder {
    color: rgb(225, 232, 239);
    padding: 10px;
  }
  ::-moz-placeholder {
    color: rgb(225, 232, 239);
    padding: 10px;
  }
  :-ms-input-placeholder {
    color: rgb(225, 232, 239);
    padding: 10px;
  }
  @media (min-width: 1024px) {
    ::-webkit-input-placeholder {
      font-size: 1.2em;
    }
    :-moz-placeholder {
      font-size: 1.2em;
    }
    ::-moz-placeholder {
      font-size: 1.2em;
    }
    :-ms-input-placeholder {
      font-size: 1.2em;
    }
  }
`

export const InfoCardValidityCvv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 10px;
  border: none;
`

export const InputType = styled.input`
  display: flex;
  justify-content: center;
  box-shadow: inset 0 0 0.5em rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 15px 0;
  margin: 1px;
  border: none;
  :focus {
    outline: none !important;
    border: 2px solid rgb(177, 80, 152);
    box-shadow: none;
  }
  ::-webkit-input-placeholder {
    color: rgb(225, 232, 239);
    padding: 5px;
  }
  :-moz-placeholder {
    color: rgb(225, 232, 239);
    padding: 10px;
  }
  ::-moz-placeholder {
    color: rgb(225, 232, 239);
    padding: 10px;
  }
  :-ms-input-placeholder {
    color: rgb(225, 232, 239);
    padding: 10px;
  }
`

export const ProductValue = styled.h4`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  @media (min-width: 1024px) {
    font-size: 1.2em;
  }
`

export const Button = styled.button`
  margin: 0 5px;
  background-color: rgb(255, 108, 1);
  font-weight: bold;
  font-size: 1.2em;
  border-radius: 4px;
  color: white;
  border: none;
  transition: 100ms;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 25px 0px 20px 0px;
  margin: 10px;
  cursor: pointer;
  box-shadow: 0 4px 0 rgb(218, 93, 0);
  :hover {
    background-color: rgb(212, 90, 0);
  }
  @media (min-width: 1024px) {
    display: flex;
    padding: 25px 0px 20px 0px;
  }
`

export const LinkButton = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
