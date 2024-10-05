import { Request, Response, Router } from "express";

import { AppDataSource } from "../DB/data.source";
import cashCredit from "../entities/cashcredit";
import cashCreditData from "../validation/Cashcredit.validate";

const router = Router();

const CashCreditRepo = AppDataSource.manager.getRepository(cashCredit);

router.get("/AllRecords", async function (req: Request, res: Response) {
  const AllRecords = await CashCreditRepo.find();

  res.status(200).send(AllRecords);
});

router.get("/:id", async function (req: Request, res: Response) {
  const params = req.params;
  const found = await CashCreditRepo.findOneBy({
    voucherNumber: parseInt(params.id),
  });
  if (!found) {
    res.status(404).send("No Record Found");
  } else {
    res.status(200).send(found);
  }
});

router.post("/", async function (req: Request, res: Response) {
  try {
    const data = await req.validate(cashCreditData);
    const newCashCredit = CashCreditRepo.create({
      CreditAmount: data.CreditAmount,
      AccountCode: data.AccountCode,
      AccountTitle: data.AccountTitle,
      CreditDetails: data.CreditDetails,
    });

    await CashCreditRepo.save(newCashCredit);
    res.status(201).send(`NewUser Created Successfully! ${newCashCredit}`);
  } catch (e) {
    res.status(400).send("something went wrong");
  }
});

router.patch("/:id", async function (req: Request, res: Response) {
  try {
    const data = await req.validate(cashCreditData);
    const params = req.params;
    const found = await CashCreditRepo.findOneBy({
      voucherNumber: parseInt(params.id),
    });

    if (!found) {
      res
        .status(404)
        .send(`No Cash Debit record found with VoucherNumber ${params.id}`);
    } else {
      const updatedCashDebit = await CashCreditRepo.update(found, {
        CreditAmount: data.CreditAmount,
        AccountCode: data.AccountCode,
        AccountTitle: data.AccountTitle,
        CreditDetails: data.CreditDetails,
      });
      res.status(201).send("update Successfuly!");
    }
  } catch (e) {
    res.status(400).send("Data is not in correct format");
  }
});
router.delete("/:id", async function (req: Request, res: Response) {
  const params = req.params;
  const found = await CashCreditRepo.findOneBy({
    voucherNumber: parseInt(params.id),
  });
  if (!found) {
    res.status(404).send("No Record Found");
  } else {
    CashCreditRepo.delete(found);
    res.status(200).send(found);
  }
});

export default router;
