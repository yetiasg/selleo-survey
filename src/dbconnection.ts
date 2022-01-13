import mongoose, { Connection, ConnectOptions } from "mongoose";
import createError, { HttpError } from "http-errors";
import { config } from "./config";

const createNewConnection = (
  url: string,
  options: ConnectOptions
): Connection | HttpError | undefined => {
  try {
    const conn = mongoose.createConnection(url, options);
    if (!conn)
      throw new createError.InternalServerError(
        "Sth went wrong with Db connection"
      );
    return conn;
  } catch (error) {
    console.log(error);
  }
};

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: true,
  autoIndex: true,
} as ConnectOptions;

// export const surveyConnection = createNewConnection(
//   "mongodb://mongo:27017/survey",
//   options
// ); // internal mongodb instance -- built with docker-combose
export const surveyConnection = createNewConnection(
  `mongodb+srv://${config.db.MONGO_DB_USERNAME}:${config.db.MONGO_BD_PASSWORD}@selleo-team-fingerprint.zrkzt.mongodb.net/gql-survey?retryWrites=true&w=majority`,
  options
); // external db -- run local db or network instance like Atlas
