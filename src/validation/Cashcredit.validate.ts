import { IsNotEmpty, IsNumber, IsString } from "class-validator";

class cashCreditData {
  @IsNotEmpty()
  @IsNumber()
  CreditAmount: number;

  @IsNotEmpty()
  @IsString()
  AccountCode: string;

  @IsNotEmpty()
  @IsString()
  AccountTitle: string;

  @IsNotEmpty()
  @IsString()
  CreditDetails: string;
}

export default cashCreditData;
