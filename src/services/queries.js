import { gql } from "@apollo/client";

export const GET_ME = gql`
  query {
    me {
      id
      username
      roles
      title
      about
      socialLinks
      toolStacks
      email
      images {
        url
      }
    }
  }
`;

export const GET_ALL_WORKS = gql`
  query {
    allWorks {
      id
      title
      workType
      images {
        url
      }
    }
  }
`;

export const GET_SINGLE_WORK = gql`
  query ($id: ItemId!) {
    work(filter: { id: { eq: $id } }) {
      id
      title
      workType
      description
      mainPoints
      url
      workContents
      images {
        url
      }
    }
  }
`;

export const GET_ALL_SERVICES = gql`
  query {
    allServices {
      id
      title
      tag
      description
      points
    }
  }
`;

// export const GET_ALL_BLOGS = gql``;
