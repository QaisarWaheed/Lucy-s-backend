import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class PurchaseInvoice {
  @PrimaryGeneratedColumn()
  invoiceNumber: number;

  @Column()
  InvoiceDate: Date;

  @Column()
  referenceNumber: number;

  @Column()
  referenceDate: Date;

  @Column()
  supplier: string;

  @Column()
  supplierTitle: string;

  @Column()
  purchase_AC: string;

  @Column()
  purchaseTitle: string;

  @Column()
  code: number;

  @Column()
  productName: string;

  @Column()
  unit: number;

  @Column()
  quantity: number;

  @Column()
  rate: number;

  @Column()
  amount: number;
}

export default PurchaseInvoice;
