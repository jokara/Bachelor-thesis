"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let News = new Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    category: {
        type: String
    },
    date: {
        type: String
    },
    picture: {
        type: String
    },
    author: {
        type: String
    },
    visibility: {
        type: String
    },
    creator: {
        type: String
    }
});
exports.default = mongoose_1.default.model('News', News);
//# sourceMappingURL=news.js.map