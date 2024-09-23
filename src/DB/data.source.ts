import { DataSource } from "typeorm";
import Admin from "../entities/admin";
import cashCredit from "../entities/cashcredit";
import cashDebit from "../entities/cashdebit";
import Journal from "../entities/journal";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "chemtronix",
  synchronize: false,
  migrationsRun: false,
  logging: false,
  entities: [Admin, cashCredit, cashDebit, Journal],
  migrations: [],
  subscribers: [],
});
