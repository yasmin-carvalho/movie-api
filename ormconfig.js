module.exports = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "bdTrabalho",
    migrations: ["src/database/migrations/*.ts"],
    entities: ["src/entities/*.ts"],
    synchronize: false,
    cli: {
        migrationsDir: "./src/database/migrations"
    }
}