import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateGenres1639949164939 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "genres",
                columns: [
                    {
                        name: 'id',
                        type: 'serial',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("genres");
    }

}
