import { Schema, Document } from 'mongoose'
import { composeMongoose } from 'graphql-compose-mongoose'
import { surveyConnection } from '../dbconnection'

interface QuestionI extends Document {
  text: {
    type: string;
    required: boolean;
  }
  description: string;
}

const QuestionSchema = new Schema<QuestionI>({
  text: {
    type: String,
    required: true
  },
  description: String
}, {collection: "question"})

export const Question = surveyConnection?.model('Question', QuestionSchema)
export const QuestionTC = composeMongoose(Question)