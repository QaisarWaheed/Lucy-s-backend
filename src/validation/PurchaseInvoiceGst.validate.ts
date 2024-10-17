import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class PurchaseInvoiceGSTData {
  @IsNotEmpty()
  @IsDate()
  InvoiceDate: Date;

  @IsNotEmpty()
  @IsNumber()
  PartyBill: number;

  @IsNotEmpty()
  @IsDate()
  PartyBillDate: Date;

  @IsNotEmpty()
  @IsString()
  Supplier: string;

  @IsNotEmpty()
  @IsString()
  SupplierTitle: string;
  @IsNotEmpty()
  @IsString()
  PurchaseAccount: string;
  @IsNotEmpty()
  @IsString()
  PurchaseACTitle: string;
  @IsNotEmpty()
  @IsString()
  NTN: string;

  @IsNotEmpty()
  @IsNumber()
  code: number;

  @IsNotEmpty()
  @IsString()
  ProductName: string;
  @IsNotEmpty()
  @IsString()
  HsCode: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  Rate: number;

  @IsNotEmpty()
  @IsNumber()
  NetAmount: number;
  @IsNotEmpty()
  @IsNumber()
  GstPercentage: number;

  @IsNotEmpty()
  @IsNumber()
  GstRate: number;
  @IsNotEmpty()
  @IsNumber()
  GstAmount: number;
}
export default PurchaseInvoiceGSTData;
