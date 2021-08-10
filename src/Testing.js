import React from 'react'
import styled from 'styled-components'

const Testing = () => {
	return (
		<Wrapper>
		  <h2>hello world</h2>
		  <p>hello people</p>
		  <button>click me</button>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  h2{
  	color: red;
  }
`


export default Testing