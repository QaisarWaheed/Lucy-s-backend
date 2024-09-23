import { Request, Response } from "express";
import adminRouter from "./src/router/adminRouter";
import { AppDataSource } from "./src/DB/data.source";
import cashcreditRouter from "./src/router/cashcreditRouter";
import cashdebitRouter from "./src/router/cashdebitRouter";
import journalRouter from "./src/router/journalRouter";

const express = require("express");
const server = express();
const port = 3000;
AppDataSource.initialize();
server.use(express.json());
server.use("/admin", adminRouter);
server.use("/cashdebit", cashdebitRouter);
server.use("/cashcredit", cashcreditRouter);
server.use("/journal", journalRouter);
try {
  AppDataSource.initialize().then(() => {
    console.log("Database is initialized");
  });
} catch (e) {
  console.log("something went wrong");
}
server.get("/", async function (req: Request, res: Response) {
  res.send("woohooo");
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
