import { Request, Response, Router } from "express";
import { AppDataSource } from "../DB/data.source";
import Invoice from "../entities/invoice";
import InvoiceData from "../validation/invoice.validate";

const router = Router();

const InvoiceRepo = AppDataSource.manager.getRepository(Invoice);

router.get("/", async function (req: Request, res: Response) {
  const AllRecords = await InvoiceRepo.find();
  res.status(200).send(AllRecords);
});

router.get("/:id", async function (req: Request, res: Response) {
  const params = req.params;
  const found = await InvoiceRepo.findOneBy({
    invoiceNumber: parseInt(params.id),
  });
  if (!found) {
    res.status(404).send(`No invoice found with id ${params.id}`);
  } else {
    res.status(200).send(found);
  }
});

router.post("/", async function (req: Request, res: Response) {
  try {
    const data = await req.validate(InvoiceData);
    const newInvoice = InvoiceRepo.create(data);

    await InvoiceRepo.save(newInvoice);
    res.status(201).send(`new Invoice Created ${newInvoice}`);
  } catch (e) {
    throw new Error("something went wrong");
  }
});

router.patch("/:id", async function (req: Request, res: Response) {
  try {
    const params = req.params;
    const data = await req.validate(InvoiceData);
    const found = await InvoiceRepo.findOneBy({
      invoiceNumber: parseInt(params.id),
    });
    if (!found) {
      res.status(404).send(`no invoice found with id ${params.id}`);
    } else {
      const updatedInvoice = await InvoiceRepo.update(found, data);
      res.status(200).send(`Invoice Updated ${updatedInvoice}`);
    }
  } catch (e) {
    res.status(400).send("Data is not in correct format");
  }
});

router.delete("/:id", async function (req: Request, res: Response) {
  const params = req.params;
  const found = await InvoiceRepo.findOneBy({
    invoiceNumber: parseInt(params.id),
  });
  if (!found) {
    res.status(404).send(`no invoice found with ID ${params.id}`);
  } else {
    res.status(200).send(InvoiceRepo.delete(found));
  }
});

export default router;
