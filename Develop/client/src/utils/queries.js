import { gql } from '@apollo/client';

export const QUERY_SINGLE_PROFILE = gql`
  query singleUser {
    me {
      _id
      username
      email
      savedBooks
    }
  }
`;