import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

class GstSaleData {
  @IsNotEmpty()
  @IsNumber()
  computerNumber: number;

  @IsNotEmpty()
  @IsDate()
  InvoiceDate: Date;

  @IsNotEmpty()
  @IsString()
  po: string;

  @IsNotEmpty()
  @IsDate()
  poDate: Date;

  @IsNotEmpty()
  @IsString()
  DeliveryNumber: string;

  @IsNotEmpty()
  @IsDate()
  DelievryDate: Date;

  @IsNotEmpty()
  @IsString()
  Account: string;
  @IsNotEmpty()
  @IsString()
  AccountTitle: string;
  @IsNotEmpty()
  @IsString()
  SaleAccount: string;
  @IsNotEmpty()
  @IsString()
  SaleTitle: string;
  @IsNotEmpty()
  @IsString()
  NTN: string;

  @IsNotEmpty()
  @IsString()
  code: string;
  @IsNotEmpty()
  @IsString()
  ProductNumber: string;

  @IsNotEmpty()
  @IsString()
  HsCode: string;
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  rate: number;

  @IsNotEmpty()
  @IsNumber()
  netAmount: number;
  @IsNotEmpty()
  @IsNumber()
  Gst: number;
  @IsNotEmpty()
  @IsNumber()
  GstRate: number;

  @IsNotEmpty()
  @IsNumber()
  GstAmount: number;

  // created: Date;
  // data: any;
}

export default GstSaleData;
