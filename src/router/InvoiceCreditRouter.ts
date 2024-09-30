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
    const newInvoice = InvoiceRepo.create({
      po: data.po,
      companyName: data.companyName,
      delievryNumber: data.delievryNumber,
      saleID: data.saleID,
      saleTitle: data.saleTitle,
      amount: data.amount,
      discount: data.discount,
      // discountAmount: (data.discount * data.amount)/100,
      discountAmount: data.discountAmount,
      netAmount: data.netAmount,
      code: data.code,
      productName: data.productName,
      unit: data.unit,
      quantity: data.quantity,
      rate: data.rate,
      description: data.description,
    });

    await InvoiceRepo.save(newInvoice);
    res.status(201).send(`new Invoice Created ${newInvoice}`);
  } catch (e) {
    throw new Error("something went wrong");
  }
});

router.patch("/:id", async function (req: Request, res: Response) {
  const params = req.params;
  const data = await req.validate(InvoiceData);
  const found = await InvoiceRepo.findOneBy({
    invoiceNumber: parseInt(params.id),
  });
  if (!found) {
    res.status(404).send(`no invoice found with id ${params.id}`);
  } else {
    const updatedInvoice = await InvoiceRepo.update(found, {
      po: data.po,
      companyName: data.companyName,
      delievryNumber: data.delievryNumber,
      saleID: data.saleID,
      saleTitle: data.saleTitle,
      amount: data.amount,
      discount: data.discount,
      // discountAmount: (data.discount * data.amount)/100,
      discountAmount: data.discountAmount,
      netAmount: data.netAmount,
      code: data.code,
      productName: data.productName,
      unit: data.unit,
      quantity: data.quantity,
      rate: data.rate,
      description: data.description,
    });
    res.status(200).send(`Invoice Updated ${updatedInvoice}`);
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
