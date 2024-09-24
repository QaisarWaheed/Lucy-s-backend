import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class GstSale{
    @PrimaryGeneratedColumn()
    computerNumber: number


    @Column()
    InvoiceDate: Date

    @Column()
    po: string

    @Column()
    poDate: Date

    @Column()
    DeliveryNumber: string

    @Column()
    DelievryDate: Date

    @Column()
    Account: string

    @Column()
    AccountTitle: string

    @Column()
    SaleAccount: string

    @Column()
    SaleTitle: string

    @Column()
    NTN: string

    @Column()
    code: string

    @Column()
    ProductNumber: string

    @Column()
    HsCode: string
    
    @Column()
    quantity: number

    @Column()
    rate: number

    @Column()
    netAmount: number

    @Column()
    Gst: number

    @Column()
    GstRate: number

    @Column()
    GstAmount: number
}

export default GstSale