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
    mutation saveBook($input: SaveBookInput!)) {
        saveBook (input: $input){
            savedBook
        }
    }
    `;
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!){
        user (bookId: $bookId){
            savedBook
        }
    }
    `;