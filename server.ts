import { Request, Response } from "express";
import adminRouter from "./src/router/adminRouter";
import { AppDataSource } from "./src/DB/data.source";
import cashcreditRouter from "./src/router/cashcreditRouter";
import cashdebitRouter from "./src/router/cashdebitRouter";
import journalRouter from "./src/router/journalRouter";
import InvoiceCreditRouter from "./src/router/InvoiceCreditRouter";
import cashbookRouter from "./src/router/cashbookRouter";
import gstSaleRouter from "./src/router/gstSaleRouter";

import PurchaseInvoiceRouter from "./src/router/PurchaseInvoiceRouter";
import PurchaseInvoiceGstRouter from "./src/router/PurchaseInvoiceGstRouter";
import AccountOpenRouter from "./src/router/AccountOpenRouter";

const express = require("express");
const server = express();
const port = 3000;
AppDataSource.initialize();
server.use(express.json());
server.use("/admin", adminRouter);
server.use("/cashdebit", cashdebitRouter);
server.use("/cashcredit", cashcreditRouter);
server.use("/journal", journalRouter);
server.use("/invoice", InvoiceCreditRouter);
server.use("/cashbook", cashbookRouter);
server.use("/gst", gstSaleRouter);
server.use("/purchase", PurchaseInvoiceRouter);
server.use("/purchaseGST", PurchaseInvoiceGstRouter);
server.use(AccountOpenRouter);
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
