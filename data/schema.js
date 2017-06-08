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

type Bot {
   bot_id: String!
   name: String!
   group_name: String!
   avatar_url: String,
   callback_url: String
}


type Message {
   id: Int!
   bot_id: String!
   text: String!
}

type Query{
    group(token: String!): Group
    bots(token: String!): [Bot]
}
 
type Mutation{
    sendBotMessage(token: String!, bot_id: String!, text: String!): Message
}

schema {
  query: Query
  mutation: Mutation
}`;

export default [typeDefinitions];