import { Request, Response, Router } from "express";
import { AppDataSource } from "../DB/data.source";
import cashCredit from "../entities/cashcredit";
import cashDebit from "../entities/cashdebit";
import { Between } from "typeorm/find-options/operator/Between";

const router = Router();

const creditRepo = AppDataSource.manager.getRepository(cashCredit);
const debitRepo = AppDataSource.manager.getRepository(cashDebit);

<<<<<<< HEAD
const creditRepo = AppDataSource.manager.getRepository(cashCredit)
const debitRepo = AppDataSource.manager.getRepository(cashDebit)
=======
router.get("/", async function (req: Request, res: Response) {
  const { oldDate, newDate } = req.query;
  const startDate = new Date(oldDate as string);
  const endDate = new Date(newDate as string);
>>>>>>> 83f7e31cc1f20b7a1d92785fb6e1f8da7c6fd57c

  if (!startDate || !endDate) {
    res.status(400).send("Null date is not possible");
  } else if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    res.status(400).send("Invalid Date Format");
  } else {
    const found1 = await debitRepo.find({
      where: { created: Between(startDate, endDate) },
    });
    const found2 = await creditRepo.find({
      where: { created: Between(startDate, endDate) },
    });
    res.status(200).send({
      found1,
      found2,
    });
  }
});

export default router;
