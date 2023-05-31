import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { UpdateResult } from 'typeorm';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getAllCustomers() {
    return this.customerService.getAllCustomers();
  }

  @Get(':id')
  getOneCustomerById(@Param('id') id: string) {
    return this.customerService.getOneCustomerById(+id);
  }

  @Post()
  createOneCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.createOneCustomer(createCustomerDto);
  }

  @Patch(':id')
  updateCustomerById(
    @Param('id') id: number,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ): Promise<UpdateResult> {
    return this.customerService.updateCustomerById(id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
