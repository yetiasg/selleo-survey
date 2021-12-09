import { schemaComposer } from "graphql-compose";
import { posts, authors } from '../data'

schemaComposer.Mutation.addFields({
  create: {
    type: 'Question',
    resolve: (data) => {
      return posts
    }
  },
  update: {
    type: 'Question',
    resolve: (data) => {
      return posts
    }
  },
  remove: {
    type: 'Question',
    resolve: (data) => {
      return posts
    }
  },
})

export const schema = schemaComposer.buildSchema()

// schemaComposer.Query.addFields({
//   questions: {
//     type: ['Question'],
//     resolve: () => {

//     }
//   },
//   answers: {
//     type: ['Answer'],
//     resolve: ()  => {

//     }
//   }
// })