import { schemaComposer } from "graphql-compose"
import { AnswerTC } from "./models/Answer.model"
import { QuestionTC } from "./models/Question.model"
import { createQuestionOne } from './resolvers'

schemaComposer.Query.addFields({
  questionAll: QuestionTC.mongooseResolvers.findMany(),
  answerAll: AnswerTC.mongooseResolvers.findMany()
})

schemaComposer.Mutation.addFields({
  questionCreateOne: QuestionTC.mongooseResolvers.createOne(),
  depreciatedQuestionCreateOne: {
    type: QuestionTC,
    args: {
      text: 'String',
      description: 'String'
    }, 
    resolve: createQuestionOne 
  }
})

export const graphqlSchema = schemaComposer.buildSchema()