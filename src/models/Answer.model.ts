import mongoose, {Schema} from 'mongoose'
import { composeMongoose } from 'graphql-compose-mongoose'
import { surveyConnection } from '../dbconnection'

const AnswerSchema = new Schema({
  questionId: {
    type: Schema.Types.ObjectId,
    ref: 'Question',
    required: true,
    index: true,
    unique: true
  },
  response: {
    type: Number,
    required: true
  },
  surveyId: {
    type: String,
    required: true,
    index: true
  }
}, {timestamps: true})

const Answer = surveyConnection?.model('Aswer', AnswerSchema)
export const AnswerTC = composeMongoose(Answer)