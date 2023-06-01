import { IsEmail, IsMobilePhone, IsNotEmpty, IsString } from 'class-validator';
import { IsSingleTaxIdentification } from '../../common/decorators/is-single-tax-identification.decorator';
import { IsValidDateFormat } from '../../common/decorators/is-valid-date-format.decorator';
import { IsAvailable } from '../../common/decorators/is-available.decorator';
import { Transform } from 'class-transformer';
import * as moment from 'moment';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    name: 'name',
    description: 'Customer first name',
    required: true,
    example: 'Matt',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    name: 'lastName',
    description: 'Customer last name',
    required: true,
    example: 'Freeman',
  })
  lastName: string;

  @IsNotEmpty()
  @IsValidDateFormat()
  @Transform(({ value }) => moment(value, 'DD/MM/YYYY'))
  @ApiProperty({
    type: String,
    format: 'DD/MM/YYYY',
    name: 'birthDate',
    description: 'Customer birth date',
    required: true,
    example: '23/04/1966',
  })
  birthDate: Date;

  @IsNotEmpty()
  @IsSingleTaxIdentification()
  @IsAvailable('cuit')
  @ApiProperty({
    type: String,
    format: '00-00000000-0',
    name: 'cuit',
    description: 'Customer single tax identification',
    required: true,
    example: '20-99999998-1',
  })
  cuit: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    name: 'address',
    description: 'Customer address',
    required: true,
    example: '924 Gilman St.',
  })
  address: string;

  @IsMobilePhone('es-AR')
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    format: '00-00000000-0',
    name: 'mobilePhone',
    description: 'Customer mobile phone',
    required: true,
    example: '+543510000000',
  })
  mobilePhone: number;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    name: 'email',
    description: 'Customer email',
    required: true,
    example: 'example@email.com',
  })
  email: string;
}
