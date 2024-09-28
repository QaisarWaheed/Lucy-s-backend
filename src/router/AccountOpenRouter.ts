import { Request, Response, Router } from "express";
import { AppDataSource } from "../DB/data.source";
import AccountOpen from "../entities/Accounts";
import { Between } from "typeorm";

const router = Router();
const AccountRepo = AppDataSource.manager.getRepository(AccountOpen);
router.get("/", async function (req: Request, res: Response) {
  const AllAccounts = await AccountRepo.find();
  res.status(200).send(AllAccounts);
});

router.get("/ledger/:code", async function (req: Request, res: Response) {
  const params = req.params;
  const found = await AccountRepo.findOneBy({
    AccountCode: parseInt(params.AccountCode),
  });
  if (!found) {
    res.status(404).send(`no record found against account number ${params.id}`);
  } else {
    const { oldDate, newDate } = req.query;
    const startDate = new Date(oldDate as string);
    const endDate = new Date(newDate as string);

    if (!startDate || !endDate) {
      res.status(400).send("Null date is not possible");
    } else if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      res.status(400).send("Invalid Date Format");
    } else {
      const found1 = await AccountRepo.find({
        where: { openingDate: Between(startDate, endDate) },
      });
      const found2 = await AccountRepo.find({
        where: { openingDate: Between(startDate, endDate) },
      });
      res.status(200).send({
        found1,
        found2,
      });
      res.status(200).send({
        found1,
        found2,
      });
    }
  }
});

router.post("/account-open", async function (req: Request, res: Response) {
  const data = req.body;
  const found = await AccountRepo.findOneBy({ Title: data.Title });
  if (found) {
    res.status(400).send(`An account with title: ${data.Title} already exist`);
  } else {
    const newAccount = AccountRepo.create({
      Title: data.Title,
      Debit: data.Debit,
      Credit: data.Credit,
    });
    await AccountRepo.save(newAccount);
    res.status(201).send(newAccount);
  }
});

router.patch("/opening", async function (req: Request, res: Response) {
  const data = req.body;
  const found = await AccountRepo.findOneBy({ Title: data.Title });
  if (!found) {
    res
      .status(404)
      .send(`no record found against Account Title: ${data.Title}`);
  } else {
    const updatedAccount = await AccountRepo.update(found, {
      Title: data.Title,
      Debit: data.Debit,
      Credit: data.Credit,
    });
    res.status(200).send("Account updated " + updatedAccount);
  }
});

export default router;
