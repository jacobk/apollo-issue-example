/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { withApollo } from 'react-apollo';
import ApolloClient from 'apollo-client';

export class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    console.log('MOUNTING GRAPHQL FREE ROUTE');
    console.log('Listing queries, should be empty?');
    console.log('Observable quereies', this.props.client.queryManager.observableQueries);
  }
  render() {
    return (
      <h1>
        BOOM. MyQuery from previous route is still in apollo-client. (check dev tools)
        <br />
        <small>See console output</small>
      </h1>
    );
  }
}
NotFound.propTypes = {
  client: React.PropTypes.instanceOf(ApolloClient).isRequired,
};

export default withApollo(NotFound);
