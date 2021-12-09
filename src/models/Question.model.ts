import { Schema } from 'mongoose'
import { composeMongoose } from 'graphql-compose-mongoose'
import { surveyConnection } from '../dbconnection'

const QuestionSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  description: String
}, {collection: "question"})

export const Question = surveyConnection?.model('Question', QuestionSchema)
export const QuestionTC = composeMongoose(Question)