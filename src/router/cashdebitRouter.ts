import { Request, Response, Router } from "express";

import { AppDataSource } from "../DB/data.source";
import cashDebit from "../entities/cashdebit";
import cashDebitData from "../validation/CashDebit.validate";

const router = Router();

const CashDebitRepo = AppDataSource.manager.getRepository(cashDebit);

router.get("/AllRecords", async function (req: Request, res: Response) {
  const AllRecords = await CashDebitRepo.find();

  res.status(200).send(AllRecords);
});

router.get("/:id", async function (req: Request, res: Response) {
  const params = req.params;
  const found = await CashDebitRepo.findOneBy({
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
    const data = await req.validate(cashDebitData);
    const newCashDebit = CashDebitRepo.create({
      DebitAmount: data.DebitAmount,
      AccountCode: data.AccountCode,
      AccountTitle: data.AccountTitle,
      DebitDetails: data.DebitDetails,
    });

    await CashDebitRepo.save(newCashDebit);
    res.status(201).send(`NewUser Created Successfully! ${newCashDebit}`);
  } catch (e) {
    res.status(400).send("something went wrong");
  }
});

router.patch("/:id", async function (req: Request, res: Response) {
  try {
    const data = await req.validate(cashDebitData);
    const params = req.params;
    const found = await CashDebitRepo.findOneBy({
      voucherNumber: parseInt(params.id),
    });

    if (!found) {
      res
        .status(404)
        .send(`No Cash Debit record found with VoucherNumber ${params.id}`);
    } else {
      const updatedCashDebit = await CashDebitRepo.update(found, {
        DebitAmount: data.DebitAmount,
        AccountCode: data.AccountCode,
        AccountTitle: data.AccountTitle,
        DebitDetails: data.DebitDetails,
      });
      res.status(201).send("update Successfuly!");
    }
  } catch (e) {
    res.status(400).send("Data is not in correct format");
  }
});
router.delete("/:id", async function (req: Request, res: Response) {
  const params = req.params;
  const found = await CashDebitRepo.findOneBy({
    voucherNumber: parseInt(params.id),
  });
  if (!found) {
    res.status(404).send("No Record Found");
  } else {
    CashDebitRepo.delete(found);
    res.status(200).send(found);
  }
});

export default router;
