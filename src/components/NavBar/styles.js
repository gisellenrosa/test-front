import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Body = styled.div`
  @media (min-width: 1024px) {
    margin-bottom: 50px;
  }
`

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #d6d6d6;
  display: flex;
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    `
  cursor: default;`}
  &.${(props) => props.activeClassName} {
    color: #fe8d3b;
  }
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: white;
  box-shadow: 0 0 0.2em rgba(0, 0, 0, 0.4);
`

export const Nav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 2px 10px;
`

export const MenuLinks = styled.p`
  font-weight: bold;
  font-size: 0.9em;
  list-style: none;
  margin-left: 8px;
`
export const Confirmation = styled.div`
  color: #fe8d3b;
`
