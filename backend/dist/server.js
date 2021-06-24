"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
}));
mongoose_1.default.connect('mongodb://localhost:27017/hunters');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('mongo open');
});
const router = express_1.default.Router();
const user_1 = __importDefault(require("./models/user"));
const news_1 = __importDefault(require("./models/news"));
const notification_1 = __importDefault(require("./models/notification"));
const group_1 = __importDefault(require("./models/group"));
const question_1 = __importDefault(require("./models/question"));
const commercial_1 = __importDefault(require("./models/commercial"));
const codebook_1 = __importDefault(require("./models/codebook"));
router.route('/login').post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let type = req.body.type;
    user_1.default.find({ 'username': username, 'password': password, 'type': type }, (err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
});
router.route('/loginSoc').post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    user_1.default.find({ 'email': username, 'password': password, 'type': "society" }, (err, user) => {
        if (err)
            console.log(err);
        else
            res.json(user);
    });
});
router.route('/register').post((req, res) => {
    let user = new user_1.default(req.body.newUser);
    user.save().
        then(user => {
        res.status(200).json({ 'user': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'user': 'no' });
    });
});
router.route('/korisnici').get((req, res) => {
    user_1.default.find((err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user);
        }
    });
});
router.route('/vesti').get((req, res) => {
    news_1.default.find((err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user);
        }
    });
});
router.route('/pitanja').get((req, res) => {
    question_1.default.find((err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user);
        }
    });
});
router.route('/grupe').get((req, res) => {
    group_1.default.find((err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user);
        }
    });
});
router.route('/sifrarnici').get((req, res) => {
    codebook_1.default.find((err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user);
        }
    });
});
router.route('/reklame').get((req, res) => {
    commercial_1.default.find((err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user);
        }
    });
});
router.route('/obavestenja').get((req, res) => {
    notification_1.default.find((err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user);
        }
    });
});
router.route('/vremeLogovanja').post((req, res) => {
    user_1.default.collection.update({ 'username': req.body.username }, { $set: { 'lastLog': req.body.timeLog } }, (err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user);
        }
    });
});
router.route('/javneVesti').post((req, res) => {
    news_1.default.find({ 'visibility': req.body.publicNews }, (err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user);
        }
    });
});
router.route('/novaVest').post((req, res) => {
    let news = new news_1.default(req.body.vest);
    news.save().
        then(user => {
        res.status(200).json({ 'user': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'user': 'no' });
    });
});
router.route('/novaGrupa').post((req, res) => {
    let grupa = new group_1.default(req.body.grupa);
    grupa.save().
        then(user => {
        res.status(200).json({ 'user': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'user': 'no' });
    });
});
router.route('/noviSifrarnik').post((req, res) => {
    let sifrarnik = new codebook_1.default(req.body.sifrarnik);
    sifrarnik.save().
        then(user => {
        res.status(200).json({ 'user': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'user': 'no' });
    });
});
router.route('/novaReklama').post((req, res) => {
    let reklama = new commercial_1.default(req.body.reklama);
    reklama.save().
        then(user => {
        res.status(200).json({ 'user': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'user': 'no' });
    });
});
router.route('/novoPitanje').post((req, res) => {
    let pitanje = new question_1.default(req.body.pitanje);
    pitanje.save().
        then(user => {
        res.status(200).json({ 'user': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'user': 'no' });
    });
});
router.route('/novoObavestenje').post((req, res) => {
    let obavestenje = new notification_1.default(req.body.obavestenje);
    obavestenje.save().
        then(user => {
        res.status(200).json({ 'user': 'ok' });
    }).catch(err => {
        res.status(400).json({ 'user': 'no' });
    });
});
router.route('/pitanjaZaKorisnika').post((req, res) => {
    question_1.default.find({ 'creator': req.body.username }, (err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user);
        }
    });
});
router.route('/promenaVidljivostiVesti').post((req, res) => {
    news_1.default.collection.update({ 'title': req.body.title }, { $set: { 'visibility': req.body.visibility } }, (err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user);
        }
    });
});
router.route('/promenaKategorijuVesti').post((req, res) => {
    news_1.default.collection.update({ 'title': req.body.title }, { $set: { 'category': req.body.category } }, (err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user);
        }
    });
});
router.route('/promenaOdgovorPitanja').post((req, res) => {
    question_1.default.collection.update({ 'question': req.body.naslov }, { $set: { 'answer': req.body.odgovor } }, (err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user);
        }
    });
});
router.route('/obrisiKorisnika').post((req, res) => {
    let username = req.body.username;
    user_1.default.findOneAndDelete({ 'username': username }, (err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user);
        }
    });
});
router.route('/obrisiUdruzenje').post((req, res) => {
    let email = req.body.email;
    user_1.default.findOneAndDelete({ 'email': email }, (err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user);
        }
    });
});
router.route('/obrisiSifrarnik').post((req, res) => {
    let name = req.body.name;
    codebook_1.default.findOneAndDelete({ 'name': name }, (err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user);
        }
    });
});
router.route('/obrisiVest').post((req, res) => {
    let title = req.body.title;
    news_1.default.findOneAndDelete({ 'title': title }, (err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user);
        }
    });
});
router.route('/news').get((req, res) => {
    user_1.default.findOne({ 'username': 'admin' }, (err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user.get('news'));
        }
    });
});
router.route('/newsByUser').post((req, res) => {
    user_1.default.findOne({ 'username': req.body.username }, (err, user) => {
        if (err)
            console.log(err);
        else {
            res.json(user.get('news'));
        }
    });
});
router.route('/addNewsToAdmin').post((req, res) => {
    user_1.default.collection.updateOne({ 'username': 'admin' }, { $push: { 'news': 'vest5' } });
});
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map