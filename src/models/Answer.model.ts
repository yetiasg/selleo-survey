import { Schema} from 'mongoose'
import { composeMongoose } from 'graphql-compose-mongoose'
import { surveyConnection } from '../dbconnection'

const AnswerSchema = new Schema({
  questionId: {
    type: Schema.Types.ObjectId,
    ref: 'Question',
    required: true,
    index: true,
    unique: false,
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

export const Answer = surveyConnection?.model('Answer', AnswerSchema)
export const AnswerTC = composeMongoose(Answer)