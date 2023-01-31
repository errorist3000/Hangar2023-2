import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'

import { DATOCMS_ENDPOINT } from 'Constants/ids'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_KEY}`,
}

const cache = new InMemoryCache({
  dataIdFromObject: obj => obj.id,
  addTypename: false,
})

const link = new HttpLink({
  uri: DATOCMS_ENDPOINT.MAIN,
  headers,
})

const client: ApolloClient<any> = new ApolloClient({
  cache,
  link,
})

export default client
