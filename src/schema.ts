import { schemaComposer } from "graphql-compose"
import { AnswerTC, Answer } from "./models/Answer.model"
import { QuestionTC, Question } from "./models/Question.model"
// import { createQuestionOne } from './resolvers'

AnswerTC.addRelation('question', {
  resolver: () => QuestionTC.mongooseResolvers.findById(),
  prepareArgs: {
    _id: (source: typeof Answer) => source.questionId,
  },
});

QuestionTC.addRelation('answers', {
  resolver: () => AnswerTC.mongooseResolvers.findMany(),
  prepareArgs: {
    filter: (source) => ({
      _operators: {
        questionId: { in: source._id }
      },
    })
  }
});

schemaComposer.Query.addFields({
  questionAll: QuestionTC.mongooseResolvers.findMany(),
  answerAll: AnswerTC.mongooseResolvers.findMany()
})

schemaComposer.Mutation.addFields({
  answerCreateOne: AnswerTC.mongooseResolvers.createOne(),
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
})


export const graphqlSchema = schemaComposer.buildSchema()