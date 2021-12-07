import express from 'express'
import { schema } from './graphql/schema'
import { config } from './config'

const app = express()





app.listen(config.server.PORT, () => console.log(`Listening on port ${config.server.PORT}`))