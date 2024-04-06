import { IsNotEmpty, IsString } from 'class-validator';

export class QueryZipCodeFromViaCepDto {
  @IsNotEmpty()
  @IsString()
  zipCode: string;
}
