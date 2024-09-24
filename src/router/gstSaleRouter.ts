import { Request, Response, Router } from "express";
import { AppDataSource } from "../DB/data.source";
import GstSale from "../entities/gstSale";

const router = Router()

const gstRepo = AppDataSource.manager.getRepository(GstSale)


router.get("/", async function(req:Request, res:Response){
    const AllRecords = await gstRepo.find()
    res.status(200).send(AllRecords)
})

router.get("/:id", async function (req:Request, res:Response){
    const params = req.params
    const found = await gstRepo.findOneBy({computerNumber: parseInt(params.id)})
    if(!found){
        res.status(200).send(`no record found with Computer Number ${params.id}`)
    }
    else{
res.status(200).send(found)
    }
})

router.post("/", async function(req:Request, res:Response){
    const {data, created} = req.body
    const newRecord = gstRepo.create({
        InvoiceDate: new Date(created),
        po: data.po,
        poDate: new Date(created),
        DeliveryNumber: data.DeliveryNumber,
        DelievryDate:new Date(created),
        Account: data.Account,
        AccountTitle: data.AccountTitle,
        SaleAccount: data.SaleAccount,
        SaleTitle: data.SaleTitle,
        NTN: data.NTN,
        code: data.code,
        ProductNumber: data.ProductNumber,
        HsCode: data.HsCode,
        quantity: data.quantity,
        rate: data.rate,
        netAmount: data.netAmount,
        Gst: data.Gst,
        GstRate: data.GstRate,
        GstAmount: data.GstAmount
    })

   await gstRepo.save(newRecord)
   res.status(201).send(newRecord)
})


router.patch("/:id", async function (req:Request, res:Response){
    const params = req.params
    const {data, created} = req.body
    
    const found = await gstRepo.findOneBy({computerNumber: parseInt(params.id)})
    if(!found){
        res.status(400).send(`no record Found with Computer Number ${params.id}`)
    }
    else{
        const updatedGstRecord = await gstRepo.update(found, {
            InvoiceDate: new Date(created),
            po: data.po,
            poDate: new Date(created),
            DeliveryNumber: data.DeliveryNumber,
            DelievryDate:new Date(created),
            Account: data.Account,
            AccountTitle: data.AccountTitle,
            SaleAccount: data.SaleAccount,
            SaleTitle: data.SaleTitle,
            NTN: data.NTN,
            code: data.code,
            ProductNumber: data.ProductNumber,
            HsCode: data.HsCode,
            quantity: data.quantity,
            rate: data.rate,
            netAmount: data.netAmount,
            Gst: data.Gst,
            GstRate: data.GstRate,
            GstAmount: data.GstAmount
        })
        res.status(200).send(updatedGstRecord)
    }
})


router.delete("/:id", async function(req: Request, res:Response){
    const params = req.params
    const found = await gstRepo.findOneBy({computerNumber: parseInt(params.id)})
    if(!found){
        res.status(404).send(`no record found with computer ID ${params.id}`)
    }
    else{
await gstRepo.delete(found)
res.status(200).send(found)
    }
})

export default router