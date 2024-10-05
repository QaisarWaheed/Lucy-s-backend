import { Request, Response, Router } from "express";
import { AppDataSource } from "../DB/data.source";
import Journal from "./../entities/journal";
import JournalData from "../validation/journal.validate";

const router = Router();

const JournalRepo = AppDataSource.manager.getRepository(Journal);
router.get("/", async function (req: Request, res: Response) {
  const AllJournal = await JournalRepo.find();
  res.status(200).send(AllJournal);
});

router.get("/:id", async function (req: Request, res: Response) {
  const params = req.params;
  const found = await JournalRepo.findOneBy({
    VoucherNumber: parseInt(params.id),
  });
  if (!found) {
    res.status(404).send(`No journal found with ID: ${params.id}`);
  } else {
    res.status(200).send(found);
  }
});

router.post("/", async function (req: Request, res: Response) {
  try {
    const data = await req.validate(JournalData);

    const newJournal = JournalRepo.create({
      CreditAmount: data.CreditAmount,
      debitAmount: data.debitAmount,
      AccountCode: data.AccountCode,
      AccountTitle: data.AccountTitle,
    });
    await JournalRepo.save(newJournal);
    res.status(201).send(newJournal);
  } catch (e) {
    res.status(400).send("something went wrong");
  }
});

router.patch("/:id", async function (req: Request, res: Response) {
  try {
    const params = req.params;
    const data = await req.validate(JournalData);
    const found = await JournalRepo.findOneBy({
      VoucherNumber: parseInt(params.id),
    });
    if (!found) {
      res.status(404).send(`No Journal Fund with ID: ${params.id}`);
    } else {
      const updateJournal = await JournalRepo.update(found, {
        CreditAmount: data.CreditAmount,
        debitAmount: data.debitAmount,
        AccountCode: data.AccountCode,
        AccountTitle: data.AccountTitle,
      });
      res.status(200).send(updateJournal);
    }
  } catch (e) {
    res.status(400).send("Data is not in correct format");
  }
});

router.delete("/:id", async function (req: Request, res: Response) {
  const params = req.params;
  const found = await JournalRepo.findOneBy({
    VoucherNumber: parseInt(params.id),
  });
  if (!found) {
    res.status(400).send(`No journal found with ID: ${params.id}`);
  } else {
    await JournalRepo.delete(found);
    res.status(200).send(` ${found}  Journal deleted Successfully! `);
  }
});
export default router;
