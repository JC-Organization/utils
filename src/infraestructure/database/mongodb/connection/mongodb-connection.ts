import mongoose from "mongoose";
import config from "../../../../config";

export class MongoDBConnection {
  static async connect(): Promise<void> {
    try {
      await mongoose.connect(config.MONGO.URI);
      console.log('Connected to mongodb');
    } catch (err) {
      console.log('Error connecting to mongodb', err);
      process.exit(1);
    }
  }
}