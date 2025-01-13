const { ApolloServer, gql } = require('apollo-server');

// Definimos el esquema (schema) usando SDL (Schema Definition Language)
const typeDefs = gql`
  # Definimos un tipo "Query" con una consulta "hello" que devuelve un String
  type Query {
    hello: String
    getUser(id: ID!): User
  }

  # Definimos un tipo "User" para representar un usuario
  type User {
    id: ID
    name: String
    age: Int
  }
`;

// Datos simulados para usuarios
const users = [
  { id: '1', name: 'Alice', age: 25 },
  { id: '2', name: 'Bob', age: 30 },
];

// Definimos los resolutores (resolvers)
const resolvers = {
  Query: {
    // Resolver para la consulta "hello"
    hello: () => '¡Hola, GraphQL!',

    // Resolver para la consulta "getUser"
    getUser: (_, { id }) => {
      return users.find(user => user.id === id);
    },
  },
};

// Configuramos el servidor Apollo
const server = new ApolloServer({ typeDefs, resolvers });

// Iniciamos el servidor
server.listen().then(({ url }) => {
  console.log(`🚀 Servidor listo en ${url}`);
});
