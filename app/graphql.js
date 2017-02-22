import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { push } from 'react-router-redux';

const networkInterface = createNetworkInterface({ uri: '/graphql' });

const client = new ApolloClient({
  networkInterface,
  reduxRootSelector: (state) => state.get('apollo'),
});

networkInterface.useAfter([{
  applyAfterware({ response }, next) {
    if (response.status === 401) {
      console.log('Afterware got 401. Navigating away from graphql route');
      client.store.dispatch(push('/nographql'));
    }
    next();
  },
}]);


export default client;

export const apolloReducer = client.reducer();
