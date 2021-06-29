import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer'

const app = express();

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}) );
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit:50000
}));

mongoose.connect('mongodb://localhost:27017/hunters');

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('mongo open');
})

const router = express.Router();

import User from './models/user';
import News from './models/news';
import Notification from './models/notification';
import Group from './models/group';
import Question from './models/question';
import Commercial from './models/commercial';
import Codebook from './models/codebook';

/*login na serveru*/
router.route('/login').post(
    (req, res)=>{
        let username = req.body.username;
        let password = req.body.password;
        let type = req.body.type;

        User.find({'username':username, 'password':password, 'type':type},
         (err,user)=>{
            if(err) console.log(err);
            else res.json(user);
        })
    }
);
/*login za udruzenja na serveru*/
router.route('/loginSoc').post(
    (req, res)=>{
        let username = req.body.username;
        let password = req.body.password;

        User.find({'email':username, 'password':password, 'type':"society"},
         (err,user)=>{
            if(err) console.log(err);
            else res.json(user);
        })
    }
);
/*registracija na serveru*/
router.route('/register').post((req, res)=>{
    let user = new User(req.body.newUser);
    user.save().
        then(user=>{
            res.status(200).json({'user':'ok'});
        }).catch(err=>{
            res.status(400).json({'user':'no'});
        })
});

/*dohvatanje korisnika na serveru*/
router.route('/korisnici').get((req, res)=>{
    User.find((err, user)=>{
        if(err) console.log(err);
        else{
            res.json(user);
        }
    })
})

/*dohvatanje vesti na serveru*/
router.route('/vesti').get((req, res)=>{
    News.find((err, user)=>{
        if(err) console.log(err);
        else{
            res.json(user);
        }
    })
});
/*dohvatanje pitanja na serveru*/
router.route('/pitanja').get((req, res)=>{
    Question.find((err, user)=>{
        if(err) console.log(err);
        else{
            res.json(user);
        }
    })
});
/*dohvatanje grupe na serveru*/
router.route('/grupe').get((req, res)=>{
    Group.find((err, user)=>{
        if(err) console.log(err);
        else{
            res.json(user);
        }
    })
});
/*dohvatanje sifrarnika na serveru*/
router.route('/sifrarnici').get((req, res)=>{
    Codebook.find((err, user)=>{
        if(err) console.log(err);
        else{
            res.json(user);
        }
    })
});
/*dohvatanje reklama na serveru*/
router.route('/reklame').get((req, res)=>{
    Commercial.find((err, user)=>{
        if(err) console.log(err);
        else{
            res.json(user);
        }
    })
});
/*dohvatanje obavestenja na serveru*/
router.route('/obavestenja').get((req, res)=>{
    Notification.find((err, user)=>{
        if(err) console.log(err);
        else{
            res.json(user);
        }
    })
});

/*postavi vreme logovanja na serveru*/
router.route('/vremeLogovanja').post((req, res)=>{
    User.collection.update({'username':req.body.username},{$set: {'lastLog':req.body.timeLog}},(err, user)=>{
        if(err) console.log(err);
        else{
            res.json(user);
        }
    })
});
/*javne vesti dohvati na serveru*/
router.route('/javneVesti').post((req, res)=>{
    News.find({'visibility':req.body.publicNews}, (err, user)=>{
        if(err) console.log(err);
        else{
            res.json(user);
        }
    })
});

/*ubaci novu vest na serveru*/
router.route('/novaVest').post((req, res)=>{
    let news = new News(req.body.vest);
    news.save().
        then(user=>{
            res.status(200).json({'user':'ok'});
        }).catch(err=>{
            res.status(400).json({'user':'no'});
        })
});
/*ubaci novu grupu na serveru*/
router.route('/novaGrupa').post((req, res)=>{
    let grupa = new Group(req.body.grupa);
    grupa.save().
        then(user=>{
            res.status(200).json({'user':'ok'});
        }).catch(err=>{
            res.status(400).json({'user':'no'});
        })
});
/*ubaci novi sifrarnik na serveru*/
router.route('/noviSifrarnik').post((req, res)=>{
    let sifrarnik = new Codebook(req.body.sifrarnik);
    sifrarnik.save().
        then(user=>{
            res.status(200).json({'user':'ok'});
        }).catch(err=>{
            res.status(400).json({'user':'no'});
        })
});
/*ubaci novu reklamu na serveru*/
router.route('/novaReklama').post((req, res)=>{
    let reklama = new Commercial(req.body.reklama);
    reklama.save().
        then(user=>{
            res.status(200).json({'user':'ok'});
        }).catch(err=>{
            res.status(400).json({'user':'no'});
        })
});
/*ubaci novo pitanje na serveru*/
router.route('/novoPitanje').post((req, res)=>{
    let pitanje = new Question(req.body.pitanje);
    pitanje.save().
        then(user=>{
            res.status(200).json({'user':'ok'});
        }).catch(err=>{
            res.status(400).json({'user':'no'});
        })
});

/*ubaci novo obavestenje na serveru*/
router.route('/novoObavestenje').post((req, res)=>{
    let obavestenje = new Notification(req.body.obavestenje);
    obavestenje.save().
        then(user=>{
            res.status(200).json({'user':'ok'});
        }).catch(err=>{
            res.status(400).json({'user':'no'});
        })
});
/*pitanja za korisnika server*/
router.route('/pitanjaZaKorisnika').post((req, res)=>{
    Question.find({'creator':req.body.username}, (err, user)=>{
        if(err) console.log(err);
        else{
            res.json(user);
        }
    })
});

/*promena vidljivosti na serveru*/
router.route('/promenaVidljivostiVesti').post((req, res)=>{
    News.collection.update({'title':req.body.title},{$set: {'visibility':req.body.visibility}},(err, user)=>{
        if(err) console.log(err);
        else{
            res.json(user);
        }
    })
});

/*promena kategorije vesti server*/
router.route('/promenaKategorijuVesti').post((req, res)=>{
    News.collection.update({'title':req.body.title},{$set: {'category':req.body.category}},(err, user)=>{
        if(err) console.log(err);
        else{
            res.json(user);
        }
    })
});
/*promena odgovora na pitanje server*/
router.route('/promenaOdgovorPitanja').post((req, res)=>{
    Question.collection.update({'question':req.body.naslov},{$set: {'answer':req.body.odgovor}},(err, user)=>{
        if(err) console.log(err);
        else{
            res.json(user);
        }
    })
});
/*obrisi korisnika server*/
router.route('/obrisiKorisnika').post((req, res)=>{
    let username=req.body.username;
    User.findOneAndDelete({'username':username},(err, user)=>{
        if(err) console.log(err);
        else{
            res.json(user);
        }
    })
});
/*obrisi udruzenje server*/
router.route('/obrisiUdruzenje').post((req, res)=>{
    let email=req.body.email;
    User.findOneAndDelete({'email':email},(err, user)=>{
        if(err) console.log(err);
        else{
            res.json(user);
        }
    })
});
/*obrisi sifrarnik*/
router.route('/obrisiSifrarnik').post((req, res)=>{
    let name=req.body.name;
    Codebook.findOneAndDelete({'name':name},(err, user)=>{
        if(err) console.log(err);
        else{
            res.json(user);
        }
    })
});
/*obrisi vest*/
router.route('/obrisiVest').post((req, res)=>{
    let title=req.body.title;
    News.findOneAndDelete({'title':title},(err, user)=>{
        if(err) console.log(err);
        else{
            res.json(user);
        }
    })
});


/*dohvati sve vesti server*/
router.route('/news').get((req, res)=>{
    User.findOne({'username':'admin'}, (err, user)=>{
        if(err) console.log(err);
        else{
            res.json(user.get('news'));
        }
    })
})
/*vesti po korisniku*/
router.route('/newsByUser').post((req, res)=>{
    User.findOne({'username':req.body.username}, (err, user)=>{
        if(err) console.log(err);
        else{
            res.json(user.get('news'));
        }
    })
})
/*vesti za admina server*/
router.route('/addNewsToAdmin').post((req,res)=>{
    User.collection.updateOne({'username':'admin'}, {$push:{'news':'vest5'}});
});


app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));