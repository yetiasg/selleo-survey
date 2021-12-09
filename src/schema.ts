import { schemaComposer } from "graphql-compose"
import { AnswerTC } from "./models/Answer.model"
import { QuestionTC } from "./models/Question.model"
// import { createQuestionOne } from './resolvers'

schemaComposer.Query.addFields({
  questionAll: QuestionTC.mongooseResolvers.findMany(),
  answerAll: AnswerTC.mongooseResolvers.findMany()
})

schemaComposer.Mutation.addFields({
  questionCreateOne: QuestionTC.mongooseResolvers.createOne(),
  questionRemoveOne: QuestionTC.mongooseResolvers.removeById(),
  questionUpdateOne: QuestionTC.mongooseResolvers.updateById(),
  // depreciatedQuestionCreateOne: {
  //   type: QuestionTC,
  //   args: {
  //     text: 'String',
  //     description: 'String'
  //   }, 
  //   resolve: createQuestionOne 
  // },
  answerCreateOne: AnswerTC.mongooseResolvers.createOne()
})

export const graphqlSchema = schemaComposer.buildSchema()