import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Body = styled.div`
  background-color: #eeeeee;
`

export const Content = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`

export const Title = styled.h4`
  margin: 10px 0 0 20px;
  font-size: 1em;
  color: #9c9c9c;
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`

export const ProductsBox = styled.div`
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.2);
  padding: 5px;
  margin: 5px 10px 15px 10px;
  display: grid;
  justify-content: center;
`

export const Product = styled.div`
  display: flex;
  border-radius: 3px;
  margin: 10px 5px;
  padding: 5;
  border: 1px solid #eeeeee;
`

export const ProductDescription = styled.div`
  margin: 0 10px 0 10px;
  flex: 1;
`

export const Img = styled.img`
  margin: 30px 0 0 0;
  height: 70px;

  @media (min-width: 1024px) {
    height: 150px;
    margin: 0 0 20px 0;
  }
`

export const ProductText = styled.p`
  font-size: 0.9em;

  @media (min-width: 1024px) {
    font-size: 1.1em;
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
