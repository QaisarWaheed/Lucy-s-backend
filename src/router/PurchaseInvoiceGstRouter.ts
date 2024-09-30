import { request, Request, Response, Router } from "express";
import { AppDataSource } from "../DB/data.source";
import PurchaseInvoiceGST from "../entities/PurchaseInvoiceGST";
import PurchaseInvoiceData from "../validation/PurchaseInvoice.validate";
import PurchaseInvoiceGSTData from "../validation/PurchaseInvoiceGst.validate";

const router = Router();

const PiGstRepo = AppDataSource.manager.getRepository(PurchaseInvoiceGST);

router.get("/", async function (req: Request, res: Response) {
  const AllRecords = await PiGstRepo.find();
  res.status(200).send(AllRecords);
});

router.get("/:id", async function (req: Request, res: Response) {
  const params = req.params;
  const found = await PiGstRepo.findOneBy({
    ComputerNumber: parseInt(params.id),
  });

  if (!found) {
    res
      .status(404)
      .send(`No record found against Computer Number:  ${params.id}`);
  } else {
    res.status(200).send(found);
  }
});

router.post("/", async function (req: Request, res: Response) {
  const data = await req.validate(PurchaseInvoiceGSTData);
  const newRecord = PiGstRepo.create({
    InvoiceDate: new Date(),
    PartyBill: data.PartyBill,
    PartyBillDate: new Date(),
    Supplier: data.Supplier,
    SupplierTitle: data.SupplierTitle,
    PurchaseAccount: data.PurchaseAccount,
    PurchaseACTitle: data.PurchaseACTitle,
    NTN: data.NTN,
    code: data.code,
    ProductName: data.ProductName,
    HsCode: data.HsCode,
    quantity: data.quantity,
    Rate: data.Rate,
    NetAmount: data.NetAmount,
    GstPercentage: data.GstPercentage,
    GstRate: data.GstRate,
    GstAmount: data.GstAmount,
  });

  await PiGstRepo.save(newRecord);
  res.status(201).send(newRecord + "new record added successfuly!");
});

router.patch("/:id", async function (req: Request, res: Response) {
  const params = req.params;
  const data = await req.validate(PurchaseInvoiceGSTData);
  const found = await PiGstRepo.findOneBy({
    ComputerNumber: parseInt(params.id),
  });
  if (!found) {
    res
      .status(404)
      .send(`no record found agaist computer number: ${params.id}`);
  } else {
    const updatedRecord = await PiGstRepo.update(found, {
      InvoiceDate: new Date(),
      PartyBill: data.PartyBill,
      PartyBillDate: new Date(),
      Supplier: data.Supplier,
      SupplierTitle: data.SupplierTitle,
      PurchaseAccount: data.PurchaseAccount,
      PurchaseACTitle: data.PurchaseACTitle,
      NTN: data.NTN,
      code: data.code,
      ProductName: data.ProductName,
      HsCode: data.HsCode,
      quantity: data.quantity,
      Rate: data.Rate,
      NetAmount: data.NetAmount,
      GstPercentage: data.GstPercentage,
      GstRate: data.GstRate,
      GstAmount: data.GstAmount,
    });
  }
});

router.delete("/:id", async function (req: Request, res: Response) {
  const params = req.params;
  const found = await PiGstRepo.findOneBy({
    ComputerNumber: parseInt(params.id),
  });
  if (!found) {
    res
      .status(404)
      .send(`no record found against Computer Number: ${params.id}`);
  } else {
    await PiGstRepo.delete(found);
    res.status(200).send(found);
  }
});

export default router;
