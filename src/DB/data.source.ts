import { DataSource } from "typeorm";
import Admin from "../entities/admin";
import cashCredit from "../entities/cashcredit";
import cashDebit from "../entities/cashdebit";
import Journal from "../entities/journal";
import Invoice from "../entities/invoice";
import GstSale from "../entities/gstSale";
import PurchaseInvoice from "../entities/PurchaseInvoice";
import PurchaseInvoiceGST from "../entities/PurchaseInvoiceGST";
import AccountOpen from "../entities/Accounts";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "chemtronix",
  synchronize: true,
  migrationsRun: false,
  logging: false,
  entities: [
    Admin,
    cashCredit,
    cashDebit,
    Journal,
    Invoice,
    GstSale,
    PurchaseInvoice,
    PurchaseInvoiceGST,
    AccountOpen,
  ],
  migrations: [],
  subscribers: [],
});
