import { IsNotEmpty, IsNumber, IsString } from "class-validator";

class cashDebitData {
  @IsNotEmpty()
  @IsNumber()
  voucherNumber: number;

  @IsNotEmpty()
  @IsNumber()
  DebitAmount: number;

  @IsNotEmpty()
  @IsString()
  AccountCode: string;

  @IsNotEmpty()
  @IsString()
  AccountTitle: string;

  @IsNotEmpty()
  @IsString()
  DebitDetails: string;
}

export default cashDebitData;
