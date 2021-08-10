import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {Home,Cart,Checkout,About} from './pages'

function App() {
  return(
  	<div>
  	  <Home />
  	  <Cart />
  	  <Checkout />
  	  <About />
      <h4>comfy sloth starter</h4>
  	</div>
  ) 
}

export default App
