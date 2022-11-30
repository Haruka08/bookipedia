import { gql } from '@apollo/client';

export const GET_ME = gql`
  query singleUser ($_id: ID!) {
    me (_id: $_id) {
      _id
      username
      email
      [savedBooks]
    }
  }
`;