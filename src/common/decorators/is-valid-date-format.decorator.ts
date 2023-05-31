import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { isSingleTaxIdentification } from '../../utils/isSingleTaxIdentification';
import { isValidDateFormat } from '../../utils/isValidDateFormat';

export function IsValidDateFormat(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'IsValidDateFormat',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [`Date Format Rule`],
      validator: IsValidDateFormatConstraint,
    });
  };
}

@ValidatorConstraint({ name: 'isSingleTaxIdentification', async: true })
@Injectable()
export class IsValidDateFormatConstraint
  implements ValidatorConstraintInterface
{
  async validate(value: string) {
    return isValidDateFormat(value);
  }

  defaultMessage(args: ValidationArguments) {
    console.log('args: ', args);
    return `${args.constraints[0]}: ${args.property} has not a valid format. Input must be in the format DD/MM/YYYY`;
  }
}
