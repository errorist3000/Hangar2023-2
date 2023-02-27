import { ApolloClient } from '@apollo/client'
import { StoreonStore } from 'storeon'

export enum SharedService {
  ApolloClient = 'apolloClient',
  Store = 'store',
}

type Client = ApolloClient<any>

type Services = {
  [SharedService.ApolloClient]?: Client
  [SharedService.Store]?: StoreonStore
}

const services: Services = {}

function checkHasValue<T = any>(serviceName: SharedService) {
  if (!services[serviceName])
    throw new Error(`${serviceName} not found in Shared`)

  return services[serviceName] as T
}

// Setters

function setApolloClient(client: Client) {
  services[SharedService.ApolloClient] = client
}

function setStore(store: StoreonStore) {
  services[SharedService.Store] = store
}

// Getters

function getApolloClient() {
  return checkHasValue<Client>(SharedService.ApolloClient)
}

function getStore() {
  return checkHasValue<StoreonStore>(SharedService.Store)
}

export default {
  setApolloClient,
  setStore,
  getApolloClient,
  getStore,
}
