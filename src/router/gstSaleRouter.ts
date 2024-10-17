import { Request, Response, Router } from "express";
import { AppDataSource } from "../DB/data.source";
import GstSale from "../entities/gstSale";
import GstSaleData from "../validation/GstSale.validate";
import { validate } from "class-validator";
import { errors } from "pg-promise";

const router = Router();

const gstRepo = AppDataSource.manager.getRepository(GstSale);

router.get("/", async function (req: Request, res: Response) {
  const AllRecords = await gstRepo.find();
  res.status(200).send(AllRecords);
});

router.get("/:id", async function (req: Request, res: Response) {
  const params = req.params;
  const found = await gstRepo.findOneBy({
    computerNumber: parseInt(params.id),
  });
  if (!found) {
    res.status(200).send(`no record found with Computer Number ${params.id}`);
  } else {
    res.status(200).send(found);
  }
});

router.post("/", async function (req: Request, res: Response) {
  const data = await req.validate(GstSaleData);

  const newRecord = gstRepo.create(data);

  await gstRepo.save(newRecord);
  res.status(201).send(newRecord);
});

router.patch("/:id", async function (req: Request, res: Response) {
  try {
    const params = req.params;
    const data = await req.validate(GstSaleData);

    const found = await gstRepo.findOneBy({
      computerNumber: parseInt(params.id),
    });
    if (!found) {
      res.status(400).send(`no record Found with Computer Number ${params.id}`);
    } else {
      const updatedGstRecord = await gstRepo.update(found, data);
      res.status(200).send(updatedGstRecord);
    }
  } catch (e) {
    res.status(400).send("Data is not in correct format");
  }
});

router.delete("/:id", async function (req: Request, res: Response) {
  const params = req.params;
  const found = await gstRepo.findOneBy({
    computerNumber: parseInt(params.id),
  });
  if (!found) {
    res.status(404).send(`no record found with computer ID ${params.id}`);
  } else {
    await gstRepo.delete(found);
    res.status(200).send(found);
  }
});

export default router;
