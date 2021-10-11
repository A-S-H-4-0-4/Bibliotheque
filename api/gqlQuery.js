import { gql } from "@apollo/client";
import client from "../lib/apollo-client";

export const makeQuery = async (dataTable, ...params) => {
  const fields = params.join(",");
  const { data } = await client.query({
    query: gql`
          query  {
            ${dataTable} {
              ${fields}
            }
          }
        `,
  });
  return data;
};

export const makeMutation = async (dataTable, object) => {
  const { data } = await client.mutate({
    mutation: gql`
      mutation {
        insert_users_one(
          object: {
            username: "Aditya"
            email: "addysecmail@gmail.com"
            password: "son123"
          }
        ) {
          u_id
          email
        }
      }
    `,
  });
  return data;
};
