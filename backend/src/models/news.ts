import mongoose from 'mongoose';

const Schema = mongoose.Schema;

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

export default mongoose.model('News', News);