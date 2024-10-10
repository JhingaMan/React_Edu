import mongoose from "mongoose";
// import { config } from "dotenv";

export async function dbConnect() {
  console.log("DB_URL:", process.env.REACT_APP_DB_URL);
  mongoose
    .connect(process.env.REACT_APP_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => {
      console.log("Connected to the database sucesfully");
    })
    .catch((error) => {
      console.log("Unable to connect to the database");
      console.log(error);
    });
}
