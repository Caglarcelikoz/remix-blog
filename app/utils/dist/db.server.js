"use strict";
exports.__esModule = true;
exports.db = void 0;
var client_1 = require("@prisma/client");
var db;
exports.db = db;
if (process.env.NODE_ENV === 'production') {
    exports.db = db = new client_1.PrismaClient();
    db.$connect();
}
else {
    if (!global.__db) {
        global.__db = new client_1.PrismaClient();
        global.__db.$connect();
    }
    exports.db = db = global.__db;
}
