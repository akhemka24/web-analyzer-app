import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./index.js";
import helmet from "helmet";
import {
    notFound,
    errorHandler,
} from "./middlewares.js"

import cors from "cors";

const app = express();
dotenv.config({path: './config.env'});

const DATABASE_CONNECTION = process.env.ATLAS_URI;
const port = process.env.PORT || 5000;

/** connect to MongoDB database*/
try {
	mongoose.connect(DATABASE_CONNECTION);
    console.log("it worked")
} catch(error) {
	console.log(error);
}

//middlewares
app.use(cors())
app.use(express.json());
app.use(helmet());
console.log("function has run")

app.use("/api/", router);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${ port }`);
});
