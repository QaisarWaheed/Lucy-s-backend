import { Request, Response } from "express";
<<<<<<< HEAD:server.ts
import adminRouter from "./src/router/adminRouter";
import { AppDataSource } from "./src/DB/data.source";
import cashcreditRouter from "./src/router/cashcreditRouter";
import cashdebitRouter from "./src/router/cashdebitRouter";
import journalRouter from "./src/router/journalRouter";
import InvoiceCreditRouter from "./src/router/InvoiceCreditRouter";
import cashbookRouter from "./src/router/cashbookRouter";
import gstSaleRouter from "./src/router/gstSaleRouter";
import cors from 'cors';
import PurchaseInvoiceRouter from "./src/router/PurchaseInvoiceRouter";
import PurchaseInvoiceGstRouter from "./src/router/PurchaseInvoiceGstRouter";
import AccountOpenRouter from "./src/router/AccountOpenRouter";
=======
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
>>>>>>> 83f7e31cc1f20b7a1d92785fb6e1f8da7c6fd57c:src/server.ts

const express = require("express");
const server = express();
const port = 3000;
// AppDataSource.initialize();
server.use(cors());
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
