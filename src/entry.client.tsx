import React from 'react'
import ReactDOM from 'react-dom/client'
import { HydratedRouter } from 'react-router/dom'
import './index.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Cookies from 'js-cookie'

const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL

const client = new ApolloClient({
  uri: `${GRAPHQL_URL}/graphql/`,
  cache: new InMemoryCache(),
  ssrMode: false,
  headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken': Cookies.get('csrftoken'),
  },
})

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HydratedRouter />
    </ApolloProvider>
  </React.StrictMode>
)
