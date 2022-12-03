import { gql } from '@apollo/client';

export const GET_ME = gql`
  query singleUser ($_id: ID!) {
    user {
      _id
      username
      email
      savedBooks{
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;

export const GET_USER = gql`
  query user {
    user {
      _id
      username
      email
      savedBooks{
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;