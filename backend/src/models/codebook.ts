import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Codebook = new Schema({
    name: {
        type: String
    },
    setElements: {
        type: Array
    }
});

export default mongoose.model('Codebook', Codebook);