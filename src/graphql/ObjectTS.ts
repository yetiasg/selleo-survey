import { schemaComposer } from "graphql-compose";

const QuestionTC = schemaComposer.createObjectTC({
  name: 'Question',
  fields: {
    id: 'Int!',
    text: 'String!',
    description: 'String'
  }
})

const AnswerTC = schemaComposer.createObjectTC({
  name: 'Answer',
  fields: {
    id: 'Int!',
    question: 'Question',
    response: 'Int!'
  }
})