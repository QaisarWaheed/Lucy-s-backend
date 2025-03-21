import { Request, Response, Router } from "express";
import { AppDataSource } from "../DB/data.source";
import PurchaseInvoice from "./../entities/PurchaseInvoice";
import PurchaseInvoiceData from "../validation/PurchaseInvoice.validate";

const router = Router();

const PInvoiceRepo = AppDataSource.manager.getRepository(PurchaseInvoice);

router.get("/", async function (req: Request, res: Response) {
  const found = await PInvoiceRepo.find();
  res.status(200).send(found);
});

router.get("/:id", async function (req: Request, res: Response) {
  const params = req.params;
  const found = await PInvoiceRepo.findOneBy({
    invoiceNumber: parseInt(params.id),
  });

  if (!found) {
    res
      .status(404)
      .send(`No Purchase Invoice Found against this ID ${params.id}`);
  } else {
    res.status(200).send(found);
  }
});

router.post("/", async function (req: Request, res: Response) {
  try {
    const data = await req.validate(PurchaseInvoiceData);
    const newPurchaseinvoice = PInvoiceRepo.create(data);

    await PInvoiceRepo.save(newPurchaseinvoice);
    res.status(201).send(newPurchaseinvoice);
  } catch (e) {
    res.status(400).send("Data is not in correct format");
  }
});

router.patch("/:id", async function (req: Request, res: Response) {
  try {
    const data = await req.validate(PurchaseInvoiceData);
    const params = req.params;
    const found = await PInvoiceRepo.findOneBy({
      invoiceNumber: parseInt(params.id),
    });
    if (!found) {
      res.status(200).send(`No Purchase Invoice found against ID ${params.id}`);
    } else {
      const updatedPInvoice = await PInvoiceRepo.update(found, data);
      res.status(200).send("Purchase Invoice Updated" + updatedPInvoice);
    }
  } catch (e) {
    res.status(400).send("Data is not in correct format");
  }
});

router.delete("/:id", async function (req: Request, res: Response) {
  const params = req.params;
  const found = await PInvoiceRepo.findOneBy({
    invoiceNumber: parseInt(params.id),
  });
  if (!found) {
    res.status(404).send(`No invoice Found with Id: ${params.id}`);
  } else {
    await PInvoiceRepo.delete(found);
    res.status(200).send("Invoice Deleted Successfuly!");
  }
});

export default router;
