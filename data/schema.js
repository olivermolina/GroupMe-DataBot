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

type MessageSummary {
    count: String!
    messages: [Message]
}

type Message {
   id: String!
   group_id: String!
   user_id: String!
   name: String!
   text: String!
   avatar_url: String!
   created_at: String!
   sender_type: String!
   system: String!
   favorited_by: String!
}

type Bot {
   bot_id: String!
   name: String!
   group_name: String!
   avatar_url: String,
   callback_url: String
}


type BotMessage {
   id: Int!
   bot_id: String!
   text: String!
}

type Query{
    group(token: String!): Group 
    bots(token: String!): [Bot]
    messages(token: String!, group_id: Int!): MessageSummary
}
 
type Mutation{
    sendBotMessage(token: String!, bot_id: String!, text: String!): BotMessage
}

schema {
  query: Query
  mutation: Mutation
}`;

export default [typeDefinitions];