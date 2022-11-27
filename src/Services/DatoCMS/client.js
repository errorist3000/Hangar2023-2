import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { DATOCMS_ENDPOINT } from 'Constants/ids'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_KEY}`,
}

const link = new HttpLink({
  uri: DATOCMS_ENDPOINT.MAIN,
  headers,
})
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})

export default client
