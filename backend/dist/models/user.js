"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let User = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    surname: {
        type: String
    },
    middleName: {
        type: String
    },
    birthdate: {
        type: String
    },
    residence: {
        type: String
    },
    country: {
        type: String
    },
    ticketNum: {
        type: String
    },
    huntingSoc: {
        type: String
    },
    email: {
        type: String
    },
    phoneNum: {
        type: String
    },
    status: {
        type: String
    },
    lastLog: {
        type: String
    },
    type: {
        type: String
    },
    picture1: {
        type: String
    },
    picture2: {
        type: String
    },
    picture3: {
        type: String
    },
    animals: {
        type: String
    },
    favHuntGround: {
        type: String
    },
    numMembers: {
        type: String
    },
    membership: {
        type: String
    },
    publicInfo: {
        type: Array
    }
});
exports.default = mongoose_1.default.model('User', User);
//# sourceMappingURL=user.js.map