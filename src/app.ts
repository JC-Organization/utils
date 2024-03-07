import express from "express";
import cors from "cors";
import configEnvs from "./config";
import { MongoDBConnection } from "./infraestructure/database/mongodb/connection/mongodb-connection";
import urlShortenerRoutes from "./infraestructure/routes/url-shortener.routes";

const app: express.Application = express();
app.use(cors());
app.use(express.json());

app.listen(configEnvs.PORT, () => {
  console.log(`\x1b[34m listening on port ${configEnvs.PORT}`);
  console.log(`\x1b[32m running environment NODE_ENV=${configEnvs.ENV}`);
});

MongoDBConnection.connect();

// Routes
app.get("/", (req, res) => {
  res.send({msg: 'Running in TS'});
});

app.use(urlShortenerRoutes);


export { app };
