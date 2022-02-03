import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRecipeTable1643385476708 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'recipe',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            unsigned: true,
            isGenerated: false,
          },
          {
            name: 'name',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('recipe');
  }
}
