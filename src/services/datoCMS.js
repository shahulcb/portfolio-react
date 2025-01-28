import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.datocms.com/",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_API_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

export default client;
