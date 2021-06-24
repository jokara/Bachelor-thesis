import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Commercial = new Schema({
    picture: {
        type: String
    },
    visibility: {
        type: String
    }
});

export default mongoose.model('Commercial', Commercial);