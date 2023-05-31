import { IsEmail, IsMobilePhone, IsOptional, IsString } from 'class-validator';
import { IsValidDateFormat } from '../../common/decorators/is-valid-date-format.decorator';
import { Transform } from 'class-transformer';
import * as moment from 'moment/moment';
import { IsSingleTaxIdentification } from '../../common/decorators/is-single-tax-identification.decorator';

export class UpdateCustomerDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsValidDateFormat()
  @Transform(({ value }) => moment(value, 'DD/MM/YYYY'))
  birthDate: Date;

  @IsOptional()
  @IsSingleTaxIdentification()
  cuit: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsMobilePhone('es-AR')
  mobilePhone: number;

  @IsOptional()
  @IsEmail()
  email: string;
}
