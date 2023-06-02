import { MigrationInterface, QueryRunner } from 'typeorm';

export class PopulateTableCustomers1685734273423 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO customers (cus_id, cus_name, cus_last_name, cus_birth_date, cus_cuit, cus_address, cus_mobile_phone, cus_email) values 
      (1, 'Christina', 'Louth', '1990-12-31', '27-99999999-4', '92530 La Follette Junction', '+5493519999999', 'clouth0@ebay.com'),
      (2, 'Adeline', 'Bicksteth', '1975-05-31', '27-99999998-6','249 Russell Center', '+5493519999998', 'abicksteth1@ftc.gov'),
      (3, 'Reynolds', 'Downton', '1965-01-10', '20-99999997-3','280 Fordem Park', '+5493519999997', 'rdownton2@sbwire.com'),
      (4, 'Xerxes', 'Morrant', '1947-11-15', '20-99999996-5','11384 Eastlawn Point', '+5493519999996', 'xmorrant3@yale.edu'),
      (5, 'Catie', 'Blankhorn', '1992-02-09', '27-99999995-1','2 Arrowood Alley', '+5493519999995', 'cblankhorn4@goo.ne.jp'),
      (6, 'Maddy', 'Pilgram', '2000-03-03', '27-99999994-3','39816 Clyde Gallagher Circle', '+5493519999994', 'mpilgram5@slate.com'),
      (7, 'Chelsea', 'Bevan', '1963-07-30', '27-99999993-5','61439 Cody Park', '+5493519999993', 'cbevan6@sphinn.com'),
      (8, 'Hamid', 'Cleyburn', '1981-10-11', '20-99999992-2','85 Duke Lane', '+5493519999992', 'hcleyburn7@blog.com'),
      (9, 'Lowrance', 'Ladbury', '1966-06-06', '20-99999991-4','6568 Ruskin Avenue', '+5493519999991', 'lladbury8@upenn.edu'),
      (10, 'Camila', 'Totterdell', '1990-01-01', '23-99999990-5','892 Ramsey Lane', '+5493519999990', 'ctotterdell9@last.fm');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
