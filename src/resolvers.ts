import { Question } from './models/Question.model'
import createError from 'http-errors'

export const createQuestionOne = async(_src:any, {text, description}: {text: string, description?: string}) => {
  try{
    const newQuestion = new Question({text, description})
    await newQuestion.save()
    if(!newQuestion) throw new createError.NotFound()
    return newQuestion
  }catch (error){
    console.log(error)
  }
}