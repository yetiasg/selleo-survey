import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import "./dbconnection";
import { ApolloServer } from "apollo-server-express";
import { graphqlSchema } from "./schema";
import { config } from "./config";

const startServer = async () => {
  const app = express();
  if (config.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
  app.use(helmet());
  app.use(cors());

  const server = new ApolloServer({
    schema: graphqlSchema,
    introspection: true,
  });
  await server.start();
  server.applyMiddleware({ app, path: "/ql" });
  await new Promise<void>((resolve) => {
    resolve;
    app.listen(config.server.PORT, async () => {
      console.log(`Listening on port ${config.server.PORT}`);
    });
  });
};
startServer();
