const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        books(username: String): [Book]
        book(_id: ID!) : Book
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: bookInput!
            ): User
        removeBook(bookId: ID!): User
    }
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: String!
        savedBook: [Book]
    }
    
    type Book {
        bookId: ID!
        authors: ["String"]
        description: String!
        title: String!
        image: String!
        link: String!
    }
    
    typr Auth {
        token: ID!
        user: User!
    }
    
    input bookInput {
        bookId: String!
        authors: ["String"]
        description: String!
        title: String!
        image: String!
        link: String!
    }`
module.exports = typeDefs;
