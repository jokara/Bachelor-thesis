import mongoose from 'mongoose';

const Schema = mongoose.Schema;

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
    }
    ,
    picture1: {
        type: String
    }
    ,
    picture2: {
        type: String
    }
    ,
    picture3: {
        type: String
    }
    ,
    animals: {
        type: String
    }
    ,
    favHuntGround: {
        type: String
    }
    ,
    numMembers: {
        type: String
    }
    ,
    membership: {
        type: String
    }
    ,
    publicInfo: {
        type: Array
    }
    
});

export default mongoose.model('User', User);