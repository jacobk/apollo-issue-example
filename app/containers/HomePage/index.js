/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import messages from './messages';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillUnmount() {
    console.log('WILL UNMOUNT GRAPHQL WRAPPED COMPONENT');
  }

  render() {
    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}


const MyQuery = gql`query MyQuery
  {
    me {
      email
    }
  }
`;

const GraphqlHomePage = graphql(MyQuery)(HomePage);

export default GraphqlHomePage;
