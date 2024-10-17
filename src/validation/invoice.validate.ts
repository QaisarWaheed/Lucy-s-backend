import { IsNotEmpty, IsNumber, IsString } from "class-validator";

class InvoiceData {
  @IsNotEmpty()
  @IsString()
  po: string;

  @IsNotEmpty()
  @IsString()
  companyName: string;

  @IsNotEmpty()
  @IsNumber()
  delievryNumber: number;

  @IsNotEmpty()
  @IsString()
  saleID: string;

  @IsNotEmpty()
  @IsString()
  saleTitle: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsNumber()
  discount: number;

  @IsNotEmpty()
  @IsNumber()
  discountAmount: number;

  @IsNotEmpty()
  @IsNumber()
  netAmount: number;

  @IsNotEmpty()
  @IsString()
  code: string;

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
  @IsString()
  description: string;
}

export default InvoiceData;
