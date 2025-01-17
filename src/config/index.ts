import dotenv from "dotenv";

dotenv.config();

export default {
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  MONGO: {
    URI: process.env.MONGO_URI || 'mongodb://mongodb:27017/todo_express',
  }
}
