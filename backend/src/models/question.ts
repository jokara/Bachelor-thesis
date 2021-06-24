import mongoose from 'mongoose';

const Schema = mongoose.Schema;

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

export default mongoose.model('Question', Question);