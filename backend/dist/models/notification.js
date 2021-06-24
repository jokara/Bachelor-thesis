"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Notification = new Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    date: {
        type: String
    },
    visibility: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Notification', Notification);
//# sourceMappingURL=notification.js.map