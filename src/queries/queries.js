import { gql } from 'apollo-boost';

export const allUsers = gql`
  query allUsers {
    allUsers{
      id
      firstName
      secondName
      email
    }
  }
`

export const userById = gql`
  query userById($id: Int!) {
      userById(id: $id) {
        id
        firstName
        secondName
        email
      }
    }
`

export const currentUser = gql`
  query currentUser {
    currentUser {
      id
      firstName
      secondName
      email
    }
  }
`

export const processList = gql`
  query processList {
    processList {
      id
      name
      numberOfExecutions
      averageLeadTime
      averageActiveTime
      employeesInvolvedProcess
      numberOfScenarios
      start
      end
      loading
    }
  }
`