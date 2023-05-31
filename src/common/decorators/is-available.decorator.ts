import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { CustomerService } from '../../customer/customer.service';

export function IsAvailable(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'isAvailable',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [`Unique ${property} Rule`],
      validator: IsAvailableConstraint,
    });
  };
}

@ValidatorConstraint({ name: 'isAvailable', async: true })
@Injectable()
export class IsAvailableConstraint implements ValidatorConstraintInterface {
  constructor(private readonly customerService: CustomerService) {}

  async validate(value: string, args: ValidationArguments) {
    return await this.customerService.customerExists(args.property, value);
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.constraints[0]}: ${args.property} is already in use.`;
  }
}
