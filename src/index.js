import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const serverUri = process.env.NODE_ENV === "production" ? 'https://catstronauts-server-lift-off-5.herokuapp.com/' : 'http://localhost:4000'

const client = new ApolloClient({
  uri: serverUri,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
