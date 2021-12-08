import express from 'express'
import morgan from 'morgan'
import './dbconnection'
import { ApolloServer } from 'apollo-server-express'
import { graphqlSchema } from './schema'
import { config } from './config'

const startServer = async() => {
  const app = express()
  app.use(morgan('dev'))

  const server = new ApolloServer({schema: graphqlSchema})
  await server.start()
  server.applyMiddleware({app, path: '/ql'})
  await new Promise<void>((resolve) => {
    resolve
    app.listen(config.server.PORT, async() => {
      console.log(`Listening on port ${config.server.PORT}`)
    })
  })
}
startServer()