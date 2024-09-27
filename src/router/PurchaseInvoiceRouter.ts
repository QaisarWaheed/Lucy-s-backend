import { Request, Response, Router } from "express";
import { AppDataSource } from "../DB/data.source";
import PurchaseInvoice from "./../entities/PurchaseInvoice";

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
  const data = req.body;
  const newPurchaseinvoice = PInvoiceRepo.create({
    InvoiceDate: new Date(),
    referenceNumber: data.referenceNumber,
    referenceDate: data.referenceDate,
    supplier: data.supplier,
    supplierTitle: data.supplierTitle,
    purchase_AC: data.purchase_AC,
    purchaseTitle: data.purchaseTitle,
    code: data.code,
    productName: data.productName,
    unit: data.unit,
    quantity: data.quantity,
    rate: data.rate,
    amount: data.amount,
  });

  await PInvoiceRepo.save(newPurchaseinvoice);
  res.status(201).send(newPurchaseinvoice);
});

router.patch("/:id", async function (req: Request, res: Response) {
  const data = req.body;
  const params = req.params;
  const found = await PInvoiceRepo.findOneBy({
    invoiceNumber: parseInt(params.id),
  });
  if (!found) {
    res.status(200).send(`No Purchase Invoice found against ID ${params.id}`);
  } else {
    const updatedPInvoice = await PInvoiceRepo.update(found, {
      InvoiceDate: new Date(),
      referenceNumber: data.referenceNumber,
      referenceDate: data.referenceDate,
      supplier: data.supplier,
      supplierTitle: data.supplierTitle,
      purchase_AC: data.purchase_AC,
      purchaseTitle: data.purchaseTitle,
      code: data.code,
      productName: data.productName,
      unit: data.unit,
      quantity: data.quantity,
      rate: data.rate,
      amount: data.amount,
    });
    res.status(200).send("Purchase Invoice Updated" + updatedPInvoice);
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
