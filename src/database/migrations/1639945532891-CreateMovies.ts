import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMovies1639945532891 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "movies",
                columns: [
                    {
                        name: 'id',
                        type: 'serial',
                        isPrimary: true
                    },
                    {
                        name: 'title',
                        type: 'varchar'
                    },
                    {
                        name: 'original_lang',
                        type: 'varchar'
                    },
                    {
                        name: 'release_date',
                        type: 'timestamp',
                    },
                    {
                        name: 'description',
                        type: 'text'
                    },
                    {
                        name: 'popularity',
                        type: 'real'
                    },
                    {
                        name: 'poster_path',
                        type: 'varchar'
                    },
                    {
                        name: 'backdrop_path',
                        type: 'varchar'
                    },
                    {
                        name: 'vote_average',
                        type: 'real'
                    },
                    {
                        name: 'vote_count',
                        type: 'int'
                    },
                    {
                        name: 'adult',
                        type: 'boolean'
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
        await queryRunner.dropTable("movies");
    }

}
