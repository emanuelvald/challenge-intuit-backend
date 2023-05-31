import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { isSingleTaxIdentification } from '../../utils/isSingleTaxIdentification';

export function IsSingleTaxIdentification(
  validationOptions?: ValidationOptions,
) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'IsSingleTaxIdentification',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [`Single tax identification rule`],
      validator: IsSingleTaxIdentificationConstraint,
    });
  };
}

@ValidatorConstraint({ name: 'isSingleTaxIdentification', async: true })
@Injectable()
export class IsSingleTaxIdentificationConstraint
  implements ValidatorConstraintInterface
{
  async validate(value: string) {
    return isSingleTaxIdentification(value);
  }

  defaultMessage(args: ValidationArguments) {
    console.log('args: ', args);
    return `${args.constraints[0]}: ${args.property} has not a valid format.`;
  }
}
