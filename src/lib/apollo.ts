import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oosqn00pap01z4evlb22kr/master',
    cache: new InMemoryCache()
})