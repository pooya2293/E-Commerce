import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import styled from 'styled-components'

const Btn = styled.button`
  background : black;
  color: #fff;
  padding : 20px 80px;
`

const Container = styled.div`
  background : red;
  color: #fff;
  .hero {
  	background : yellow;
  	padding: 20px 200px;
  }
`
const Container2 = styled.div`
  background : red;
  color: #fff;
  .hero {
  	background : blue;
  	padding: 20px 200px;
  }
`
function App() {
  return(
   <div> 
      <h4>comfy sloth starter</h4>
      <Btn>click me!</Btn>
      <Container>
      	<div>
      	  <h3>hellow styled components div</h3>
      	</div>
      	<div className="hero">this is hero</div>
      </Container>
      <Container2>
      	<div>
      	  <h3>hellow styled components div</h3>
      	</div>
      	<div className="hero">this is hero</div>{/*this div background is blue with the same class name but with difrent style work*/}

      </Container2>
   </div>
  ) 
}

export default App
