import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterAppointmentProviderId1612904851195 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.dropColumn('appointments','provider');
     await queryRunner.addColumn('appointments', new TableColumn({
        name: "provider-id",
        type: "uuid",
        isNullable: true
      }));
      await queryRunner.createForeignKey("appointments", new TableForeignKey({
        name: "appointmentProvider",
        columnNames: ["provider-id"],
        referencedColumnNames: ["id"],
        referencedTableName: 'users',
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey("appointments", 'appointmentProvider');
      await queryRunner.dropColumn('appointments','provider-id');
      await queryRunner.addColumn('appointments', new TableColumn({
        name: "provider",
        type: "varchar"
      }));
    }

}