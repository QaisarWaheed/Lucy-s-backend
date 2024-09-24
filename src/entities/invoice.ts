import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Invoice {
  @PrimaryGeneratedColumn()
  invoiceNumber: number;

  @Column({type: 'timestamp', default: ()=>'CURRENT_TIMESTAMP'})
  invoiceDate: Date;

  @Column()
  po: string;

  @Column({type: 'timestamp', default: ()=>'CURRENT_TIMESTAMP'})
  poDate: Date;

  @Column()
  companyName: string;

  @Column()
  delievryNumber: number;

  @Column({type: 'timestamp', default: ()=>'CURRENT_TIMESTAMP'})
  delievryDate: Date

  @Column()
  saleID: string

  @Column()
 saleTitle: string


 @Column()
 amount: number

 @Column()
 discount: number

 @Column()
 discountAmount: number

 @Column()
 netAmount: number

 @Column()
 code: string

 @Column()
 productName: string

 @Column()
 unit: number

 @Column()
 quantity: number

 @Column()
 rate: number

 @Column()
 description: string


}

export default Invoice;