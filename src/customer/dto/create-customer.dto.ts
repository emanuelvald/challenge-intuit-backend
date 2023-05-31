import { IsEmail, IsMobilePhone, IsNotEmpty, IsString } from 'class-validator';
import { IsSingleTaxIdentification } from '../../common/decorators/is-single-tax-identification.decorator';
import { IsValidDateFormat } from '../../common/decorators/is-valid-date-format.decorator';
import { IsAvailable } from '../../common/decorators/is-available.decorator';
import { Transform } from 'class-transformer';
import * as moment from 'moment';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsValidDateFormat()
  @Transform(({ value }) => moment(value, 'DD/MM/YYYY'))
  birthDate: Date;

  @IsNotEmpty()
  @IsSingleTaxIdentification()
  @IsAvailable('cuit')
  cuit: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsMobilePhone('es-AR')
  @IsNotEmpty()
  mobilePhone: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
