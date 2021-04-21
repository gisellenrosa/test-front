import React from 'react'
import { Body, Header, Nav, MenuLinks, StyledLink } from './styles'

export default function NavBar() {
  const handleClick = (e) => {
    e.preventDefault()
  }
  return (
    <Body>
      <Header>
        <Nav>
          <StyledLink exact activeClassName="current" to="/">
            <MenuLinks>SACOLA</MenuLinks>
          </StyledLink>
          <StyledLink activeClassName="current" to="/payment">
            <MenuLinks>PAGAMENTO</MenuLinks>
          </StyledLink>
          <StyledLink
            activeClassName="current"
            disabled={true}
            onClick={handleClick}
            to="/confirmation"
          >
            <MenuLinks>CONFIRMAÇÃO</MenuLinks>
          </StyledLink>
        </Nav>
      </Header>
    </Body>
  )
}
