import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Body = styled.div`
  background-color: #eeeeee;
`
export const Content = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    justify-content: center;
  }
`
export const ContentValue = styled.div`
  @media (min-width: 1024px) {
    width: 40vw;
    margin-top: 10px;
  }
`
export const ProductandValue = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-around;
  }
`
export const ContentProduct = styled.div`
  @media (min-width: 1024px) {
    width: 60vw;
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

export const ContentBox = styled.div`
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
  padding: 5px;
  border: 1px solid #eeeeee;
  @media (min-width: 768px) {
    margin: 10px 5px;
  }
`

export const ProductDescription = styled.div`
  margin: 0 10px 0 10px;
  flex: 1;
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
  @media (min-width: 1024px) {
    font-size: 1.5em;
  }
`

export const CustomerBox = styled.div`
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.2);
  padding: 5px;
  margin: 5px 10px 15px 10px;
  display: grid;
  justify-content: flex-start;
`

export const CustomerInfo = styled.div`
  padding: 10px;
  @media (min-width: 1024px) {
    padding: 10px 50px;
    text-align: flex-end;
  }
`

export const InfoText = styled.p`
  font-size: 1em;
  text-align: left;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    font-size: 1.2em;
    text-align: flex-start;
  }
  @media (min-width: 1024px) {
    font-size: 1.4em;
  }
`

export const Img = styled.img`
  margin: 5px 0 0 0;
  height: 50px;
  @media (min-width: 1024px) {
    height: 200px;
    margin-bottom: 20px;
  }
`

export const ProductText = styled.p`
  font-size: 0.9em;
`

export const ProductValue = styled.h4`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
`

export const ImgContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`

export const ImgConfirmation = styled.img`
  width: 300px;
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
`

export const LinkButton = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
