import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Invoice {
  @PrimaryGeneratedColumn()
  invoiceNumber: number;

  @Column()
  InvoiceDate: Date;

  @Column()
  PO: string;

  @Column()
  poDate: Date;

  @Column()
  CompanyName: string;

  @Column()
  DelievryNumber: number;
}
