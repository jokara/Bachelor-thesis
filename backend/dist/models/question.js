"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Question = new Schema({
    question: {
        type: String
    },
    answer: {
        type: String
    },
    creator: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Question', Question);
//# sourceMappingURL=question.js.map