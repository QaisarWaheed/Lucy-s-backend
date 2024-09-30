import { IsNotEmpty, IsNumber, IsString } from "class-validator";

class AccountOpenData {
  @IsNotEmpty()
  @IsNumber()
  AccountCode: number;

  @IsNotEmpty()
  @IsString()
  Title: string;

  @IsNotEmpty()
  @IsNumber()
  Debit: number;

  @IsNotEmpty()
  @IsNumber()
  Credit: number;
}
export default AccountOpenData;
