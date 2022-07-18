const Migration = require("mysql-migrations");
const Database = require("./Database");

const database = new Database();

Migration.init(database.connection, --dirname + "/migration");
