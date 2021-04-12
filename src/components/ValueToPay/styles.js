import styled from 'styled-components'

export const ValuesBox = styled.div`
  border: 2px solid #d8d8d8d8;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 10px 20px 10px;
  @media (min-width: 1024px) {
    margin: 40px 10px 20px 10px;
  }
`

export const Value = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px;
`

export const ValueText = styled.p`
  margin-bottom: 0;
  margin-top: 0;
  @media (min-width: 1024px) {
    font-size: 1.2em;
    margin: 5px 0;
  }
`

export const ValueDiscount = styled.p`
  margin-bottom: 0;
  margin-top: 0;
  color: #fe8d3b;
  @media (min-width: 1024px) {
    font-size: 1.2em;
  }
`

export const ValueTotal = styled.p`
  font-weight: bold;
  margin: 10px 0 0 0;
  @media (min-width: 1024px) {
    font-size: 1.2em;
    margin-top: 60px;
  }
`
