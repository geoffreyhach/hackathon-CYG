import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import { DynamoDBAdapter } from "@next-auth/dynamodb-adapter";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import dynamoClient from "../db";

const config = {
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        sessionToken: process.env.AWS_SESSION_TOKEN,
    },
    region: process.env.AWS_DEFAULT_REGION,
};

const client = DynamoDBDocument.from(new DynamoDB(config), {
    marshallOptions: {
        convertEmptyValues: true,
        removeUndefinedValues: true,
        convertClassInstanceToMap: true,
    },
});

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],
    adapter: DynamoDBAdapter(client, {
        tableName: "users",
    }),
    callbacks: {
        async session({ session, token, user }) {
            session.user.isAdmin = user.isAdmin;
            session.user.id = user.id;
            return session;
        },
    },
};
export default NextAuth(authOptions);
