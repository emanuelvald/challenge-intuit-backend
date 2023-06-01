import { IsEmail, IsMobilePhone, IsOptional, IsString } from 'class-validator';
import { IsValidDateFormat } from '../../common/decorators/is-valid-date-format.decorator';
import { Transform } from 'class-transformer';
import * as moment from 'moment/moment';
import { IsSingleTaxIdentification } from '../../common/decorators/is-single-tax-identification.decorator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCustomerDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    name: 'name',
    description: 'Customer first name',
    required: false,
    example: 'Matt',
  })
  name: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    name: 'lastName',
    description: 'Customer last name',
    required: false,
    example: 'Freeman',
  })
  lastName: string;

  @IsOptional()
  @IsValidDateFormat()
  @Transform(({ value }) => moment(value, 'DD/MM/YYYY'))
  @ApiProperty({
    type: String,
    format: 'DD/MM/YYYY',
    name: 'birthDate',
    description: 'Customer birth date',
    required: false,
    example: '23/04/1966',
  })
  birthDate: Date;

  @IsOptional()
  @IsSingleTaxIdentification()
  @ApiProperty({
    type: String,
    format: '00-00000000-0',
    name: 'cuit',
    description: 'Customer single tax identification',
    required: false,
    example: '20-99999998-1',
  })
  cuit: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    name: 'address',
    description: 'Customer address',
    required: false,
    example: '924 Gilman St.',
  })
  address: string;

  @IsOptional()
  @IsMobilePhone('es-AR')
  @ApiProperty({
    type: String,
    format: '00-00000000-0',
    name: 'mobilePhone',
    description: 'Customer mobile phone',
    required: false,
    example: '+543510000000',
  })
  mobilePhone: number;

  @IsOptional()
  @IsEmail()
  @ApiProperty({
    type: String,
    name: 'email',
    description: 'Customer email',
    required: false,
    example: 'example@email.com',
  })
  email: string;
}
