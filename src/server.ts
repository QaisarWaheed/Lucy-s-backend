import { Request, Response } from "express";
import adminRouter from "./router/adminRouter";
import { AppDataSource } from "./DB/data.source";
import cashcreditRouter from "./router/cashcreditRouter";
import cashdebitRouter from "./router/cashdebitRouter";
import journalRouter from "./router/journalRouter";
import InvoiceCreditRouter from "./router/InvoiceCreditRouter";
import cashbookRouter from "./router/cashbookRouter";
import gstSaleRouter from "./router/gstSaleRouter";

import PurchaseInvoiceRouter from "./router/PurchaseInvoiceRouter";
import PurchaseInvoiceGstRouter from "./router/PurchaseInvoiceGstRouter";
import AccountOpenRouter from "./router/AccountOpenRouter";
import { validation } from "./validation/validation";

const express = require("express");
const server = express();
const port = 3000;
AppDataSource.initialize();
server.use(express.json());
server.use(validation);
server.use("/admin", adminRouter);
server.use("/cashdebit", cashdebitRouter);
server.use("/cashcredit", cashcreditRouter);
server.use("/cashbook", cashbookRouter);
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
