import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
          user {
            _id
            name
          }
        }
      }
    `;
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
          user {
            _id
            name
          }
        }
      }
    `;
export const SAVE_BOOK = gql`
    mutation saveBook {
        saveBook: (inout: {
            authors
            description
            bookId
            image
            link
            title
        })
    }
    `;
export const REMOVE_BOOK = gql`
    mutation removeBook(bookId: String!){
        user {
        _id
        name
        skills
        }
    }
    `;