import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Body = styled.div`
  background-color: #eeeeee;
`
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #d6d6d6;
  display: flex;
  flex-grow: 1;
  padding-left: 10px;
  cursor: pointer;
  text-align: color-interpolation-filters;

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
  flex: 1;
  justify-content: center;
  align-content: center;
  background-color: white;
  width: 100vw;
  box-shadow: 0 0 0.2em rgba(0, 0, 0, 0.4);
`
export const Nav = styled.ul`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100vw;
  padding: 2px 10px;
`

export const MenuLinks = styled.li`
  font-weight: bold;
  font-size: 0.9em;
  list-style: none;
`
