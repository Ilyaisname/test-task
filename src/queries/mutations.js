import { gql } from 'apollo-boost';

export const CREATE_USER = gql`
  mutation singup(
    $firstName: String!
    $secondName: String!
    $email: String!
    $password: String!
  ) {
     
    signup (
      firstName: $firstName
      secondName: $secondName
      email: $email
      password: $password) 
      
      login(
        email: $email
        password: $password
      ) {
        token
        user {
          id
          firstName
          secondName
          email
        }
      }
  }
`

export const LOGIN = gql`
  mutation login(
    $email: String!
    $password: String!
  ) {
    login (
      email: $email
      password: $password
    ) {
      token
      user {
        id
        firstName
        secondName
        email
      }
    }
  }
`

export const editUser = gql`
  mutation editUser(
    $id: Int!
    $email: String!
    $firstName: String!
    $secondName: String!
    $password: String
  ) {
    editUser(
      id: $id
      email: $email
      firstName: $firstName
      secondName: $secondName
      password: $password
    ) {
        id
        email
        firstName
        secondName 
    }
  }
`