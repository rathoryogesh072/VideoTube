import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config();


const PORT=process.env.PORT || 3000;
connectDB().then(() => {
  console.log("Database connected successfully");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}` );
  });
}).catch((error) => {
  console.error("Database connection failed", error);
  process.exit(1);
});