import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Cart from '../pages/Cart'
import Payment from '../pages/Payment'
import Confirmation from '../pages/Confirmation'

export default function routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Cart} />
        <Route path="/payment" component={Payment} />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>
    </div>
  )
}
