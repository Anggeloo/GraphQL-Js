# GraphQL in Node.js with Apollo Server

This is a basic example of how to implement a GraphQL architecture in Node.js using **Apollo Server**. This project aims to demonstrate how to create a simple GraphQL server with basic queries.

## 🚀 Technologies used

- Node.js](https://nodejs.org/) - JavaScript runtime environment
- Apollo Server](https://www.apollographql.com/docs/apollo-server/) - Library for building GraphQL servers
- [GraphQL](https://graphql.org/) - Query language for APIs


## 📂 Project structure

```plaintext
GraphQL-Js/
├── GraphQL.js      # Main server code.
├─── package.json   # Project configuration and dependencies.
└─── README.md      # Project documentation.
```
## 🛠️ Installation
Follow these steps to install and run the project on your local machine:

## Clone the repository:

````bash
git clone https://github.com/Anggeloo/GraphQL-Js.git
```
Navigate to the project directory:

````bash
cd GraphQL-Js
```
### Install the dependencies:

````bash
npm install
```

### Run the server:

````bash
node GraphQL.js
```
Access the GraphQL interface: Open your browser and go to http://localhost:4000 to interact with the server using the Apollo Server graphical interface.

## 📜 GraphQL Schema.
The server includes the following basic schema:

````bash
type Query {
  hello: String
  getUser(id: ID!): User
}

type User {
  id: ID
  name: String
  age: Int
}
```

### Available queries
Basic query:
````bash
query {
  hello
}
```
### Expected response:

````bash
{
  “data": {
    “hello": ”Hello, GraphQL!”
  }
}
```
### Query with parameters:
````bash
query {
  getUser(id: “1”) {
    id
    name
    age
  }
}
```
### Expected response:

````bash
{
  “data": {
    “getUser": {
      “id": ‘1’,
      “name": ‘Alice’,
      “age": 25
    }
  }
}
```
## 🧪 Testing
You can test the server using the Apollo Server GUI or any GraphQL client such as:

* Postman
* Insomnia
