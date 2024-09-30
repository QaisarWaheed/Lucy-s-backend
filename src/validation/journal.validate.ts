import { IsNotEmpty, IsNumber, IsString } from "class-validator";

class JournalData {
  @IsNotEmpty()
  @IsNumber()
  VoucherNumber: number;

  @IsNotEmpty()
  @IsNumber()
  CreditAmount: number;
  @IsNotEmpty()
  @IsNumber()
  debitAmount: number;

  @IsNotEmpty()
  @IsString()
  AccountCode: string;
  @IsNotEmpty()
  @IsString()
  AccountTitle: string;
}

export default JournalData;
