import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { IsSingleTaxIdentification } from '../common/decorators/is-single-tax-identification.decorator';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn({
    name: 'cus_id',
    primaryKeyConstraintName: 'PK_CUS',
  })
  @IsNumber()
  id: number;

  @Column({ name: 'cus_name', type: 'character varying' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column({ name: 'cus_last_name', type: 'character varying' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @CreateDateColumn({
    name: 'cus_birth_date',
    type: 'date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @IsNotEmpty()
  birthDate: Date;

  @Column({ name: 'cus_cuit', type: 'character varying', unique: true })
  @IsSingleTaxIdentification()
  @IsNotEmpty()
  cuit: string;

  @Column({ name: 'cus_address', type: 'character varying' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @Column({ name: 'cus_mobile_phone', type: 'character varying' })
  @IsMobilePhone()
  @IsNotEmpty()
  mobilePhone: number;

  @Column({ name: 'cus_email', type: 'character varying' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @CreateDateColumn({
    name: 'cus_created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'cus_updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
