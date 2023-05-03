module.exports = {
    "type": "sqlite",
    "database": "./src/database/database.sqlite",
    "migrations": [
        "./build/database/migrations/*.js"
    ],
    "entities": [
        "./build/models/*.js"
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
}

