import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://graphql-tut.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: { 'Hasura-Client-Name':'hasura-console','content-type':'application/json','x-hasura-admin-secret':'BBlw0BX3UnFi6iQsMft5Qg7HCOjcVshRZLk9A4GXWX3edkznwYSnsgD22VDaXXlb'}
});

export default client;