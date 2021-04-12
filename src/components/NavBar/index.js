import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <ul>
        <Link exact to="/">
          <li>SACOLA</li>
        </Link>
        <Link to="/payment">
          <li>PAGAMENTO</li>
        </Link>
        <Link to="/confirmation">
          <li>CONFIRMAÇÃO</li>
        </Link>
      </ul>
    </div>
  )
}
