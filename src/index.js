import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
	<ProductsProvider>
		<Auth0Provider
		  domain="dev-4p0ti3wa.us.auth0.com"
    	  clientId="NpSw7WJhtlCchXapbqQYNgVdpD3XSghH"
    	  redirectUri={window.location.origin}
		>
		  <FilterProvider>
		  	<CartProvider>
			  <App />
		  	</CartProvider>
		  </FilterProvider>
		</Auth0Provider>
	</ProductsProvider>,
 document.getElementById('root'))
