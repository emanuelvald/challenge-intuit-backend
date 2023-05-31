import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Customer } from './customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerRepository {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async getAllCustomers(): Promise<Customer[]> {
    return await this.customerRepository
      .find({
        select: [
          'id',
          'name',
          'lastName',
          'birthDate',
          'cuit',
          'address',
          'mobilePhone',
          'email',
        ],
        order: { id: 'ASC' },
      })
      .catch((error) => {
        throw new BadRequestException({
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: `${error.code} ${error.detail}`,
          error: 'Internal Server Error',
        });
      });
  }

  async getOneCustomerById(customerId: number): Promise<Customer | null> {
    return await this.customerRepository
      .findOneBy({ id: customerId })
      .catch((error) => {
        throw new BadRequestException({
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: `${error.code} ${error.detail}`,
          error: 'Internal Server Error',
        });
      });
  }

  async createOneCustomer(createCustomerDto: CreateCustomerDto) {
    return await this.customerRepository
      .save(createCustomerDto, { reload: true })
      .catch((error) => {
        throw new BadRequestException({
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: `${error.code} ${error.detail}`,
          error: 'Internal Server Error',
        });
      });
  }

  async updateCustomerById(
    customerId: number,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<UpdateResult> {
    return this.customerRepository
      .update(
        { id: customerId },
        {
          name: updateCustomerDto.name,
          lastName: updateCustomerDto.lastName,
          birthDate: updateCustomerDto.birthDate,
          cuit: updateCustomerDto.cuit,
          address: updateCustomerDto.address,
          mobilePhone: updateCustomerDto.mobilePhone,
          email: updateCustomerDto.email,
        },
      )
      .catch((error) => {
        throw new BadRequestException({
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: [`${error.message}`],
          error: 'Internal Server Error',
        });
      });
  }

  async customerExists(property: string, value: string): Promise<boolean> {
    return this.customerRepository
      .find({ where: { [property]: value.toString() } })
      .then((result) => {
        return !result;
      })
      .catch((error) => {
        throw new BadRequestException({
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: [`${error.message}`],
          error: 'Internal Server Error',
        });
      });
  }
}
