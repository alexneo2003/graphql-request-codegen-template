import { GraphQLClient } from 'graphql-request';
import { getSdk } from './sdk'; // THIS FILE IS THE GENERATED FILE

const client = new GraphQLClient(process.env.GRAPHQL_ENDPOINT as string, {
  headers: {
    authorization: 'Bearer xxxxxxxxx',
  },
});

const sdk = getSdk(client);

sdk.Suites().then((data) => console.log(data));

sdk.Users().then((data) => console.log(data));
