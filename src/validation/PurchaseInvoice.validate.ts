import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class PurchaseInvoiceData {
  @IsNotEmpty()
  @IsDate()
  InvoiceDate: Date;

  @IsNotEmpty()
  @IsNumber()
  referenceNumber: number;

  @IsNotEmpty()
  @IsDate()
  referenceDate: Date;

  @IsNotEmpty()
  @IsString()
  supplier: string;

  @IsNotEmpty()
  @IsString()
  supplierTitle: string;

  @IsNotEmpty()
  @IsString()
  purchase_AC: string;

  @IsNotEmpty()
  @IsString()
  purchaseTitle: string;

  @IsNotEmpty()
  @IsNumber()
  code: number;

  @IsNotEmpty()
  @IsString()
  productName: string;

  @IsNotEmpty()
  @IsNumber()
  unit: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
  @IsNotEmpty()
  @IsNumber()
  rate: number;

  @IsNotEmpty()
  @IsNumber()
  amount: number;
}

export default PurchaseInvoiceData;
