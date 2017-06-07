const typeDefinitions = `

type Group {
   id: Int
   group_id: Int
   name: String
   members: [Member]
}

type Member {
   id: Int
   user_id: Int
   nickname: String
}

type Query{
    group(token: String!): Group
}

schema {
  query: Query
}`;

export default [typeDefinitions];