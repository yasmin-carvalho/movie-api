import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePerson1639947373034 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"person",
                columns: [
                    {
                        name: 'id',
                        type: 'serial',
                        isPrimary: true
                    },
                    {
                        name: 'gender',
                        type: 'int'
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'popularity',
                        type: 'real'
                    },
                    {
                        name: 'profile_path',
                        type: 'varchar'
                    },
                    {
                        name: 'character',
                        type: 'varchar'
                    },
                    {
                        name: 'biography',
                        type: 'text'
                    },
                    {
                        name: 'birthday',
                        type: 'timestamp'
                    },
                    {
                        name: 'place_of_birth',
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
        await queryRunner.dropTable("person");
    }

}
