import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class PurchaseInvoiceGST {
  @PrimaryGeneratedColumn()
  ComputerNumber: number;

  @Column()
  InvoiceDate: Date;

  @Column()
  PartyBill: number;

  @Column()
  PartyBillDate: Date;

  @Column()
  Supplier: string;

  @Column()
  SupplierTitle: string;

  @Column()
  PurchaseAccount: string;
  @Column()
  PurchaseACTitle: string;

  @Column()
  NTN: string;

  @Column()
  code: number;

  @Column()
  ProductName: string;

  @Column()
  HsCode: string;

  @Column()
  quantity: number;

  @Column()
  Rate: number;

  @Column()
  NetAmount: number;

  @Column()
  GstPercentage: number;

  @Column()
  GstRate: number;
  @Column()
  GstAmount: number;
}
export default PurchaseInvoiceGST;
