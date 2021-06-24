import mongoose from 'mongoose';

const Schema = mongoose.Schema;

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

export default mongoose.model('Notification', Notification);