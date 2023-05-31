import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCustomer1685497407127 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS "customers" ("cus_id" SERIAL NOT NULL, "cus_name" character varying NOT NULL, "cus_last_name" character varying NOT NULL, "cus_birth_date" date NOT NULL DEFAULT now(), "cus_cuit" character varying NOT NULL, "cus_address" character varying NOT NULL, "cus_mobile_phone" character varying NOT NULL, "cus_email" character varying NOT NULL, "cus_created_at" TIMESTAMP NOT NULL DEFAULT now(), "cus_updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_CUS" PRIMARY KEY ("cus_id"), CONSTRAINT "UQ_CUS" UNIQUE ("cus_cuit"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "customers"`);
  }
}
