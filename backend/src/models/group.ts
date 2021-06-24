import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Group = new Schema({
    name: {
        type: String
    },
    members: {
        type: String
    },
    creator: {
        type: String
    }
});

export default mongoose.model('Group', Group);