import { Injectable } from '@nestjs/common';
import { CustomerRepository } from './customer.repository';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './customer.entity';
import { UpdateResult } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(private customerRepository: CustomerRepository) {}

  async getAllCustomers() {
    return await this.customerRepository.getAllCustomers();
  }

  async getOneCustomerById(customerId: number): Promise<Customer | null> {
    return await this.customerRepository.getOneCustomerById(customerId);
  }

  async createOneCustomer(createCustomerDto: CreateCustomerDto) {
    return await this.customerRepository.createOneCustomer(createCustomerDto);
  }

  async updateCustomerById(
    customerId: number,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<UpdateResult> {
    return await this.customerRepository.updateCustomerById(
      customerId,
      updateCustomerDto,
    );
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }

  async customerExists(property: any, value: any): Promise<boolean> {
    return await this.customerRepository.customerExists(property, value);
  }
}
