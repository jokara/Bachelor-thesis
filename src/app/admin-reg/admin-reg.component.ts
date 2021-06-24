import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin-reg',
  templateUrl: './admin-reg.component.html',
  styleUrls: ['./admin-reg.component.css']
})
export class AdminRegComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
    this.popuniUsers();
    this.generisiDanasnjiDatum();
  }



  users: User[] = [];
  newUser: User = null;
  izabraniKorisnik: User = null;
  mailText: string;
  opcija: String = "";

  /*F03CF8AF35BF11B19AC17CA36DBCFD0FA25E*/

  username: String = "";
  password: String = "";
  password2: String = "";
  name: String = "";
  surname: String = "";
  middleName: String = "";
  birthdate: String = "";
  residence: String = "";
  country: String = "";
  ticketNum: String = "";
  huntingSoc: String = "";
  email: String = "";
  phoneNumber: String = "";
  status: String = "";
  lastLog: String = "";
  type: String = "";
  picture1: String = "";
  picture2: String = "";
  picture3: String = "";
  animals: String = "";
  favHuntGround: String = "";
  numMembers: String = "";
  membership: String = "";
  publicInfo: Boolean[] = null;

  func(): void{
    localStorage.removeItem("ulogovan");
    this.router.navigate(['/logovanje'])
  }

  message: String = "";
  ErrorMessage: String = "";
  //
  regexPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\.,@#$%])[A-Za-z\d\.,@%]{8,}$/;
  regexPatternPhone = /^[0-9]{5,}$/;
  regexPatternMail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  


  onSelectFile1(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      if (event.target.files[0].type !== "image/jpeg" && event.target.files[0].type !== "image/png") {
        alert("Pogresan tip dokumenta == " + event.target.files[0].type);
        return false;
      }
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        let url = reader.result.toString();
        localStorage.setItem("url1", reader.result.toString());
      }
    }
  }

  onSelectFile2(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      if (event.target.files[0].type !== "image/jpeg" && event.target.files[0].type !== "image/png") {
        alert("Pogresan tip dokumenta == " + event.target.files[0].type);
        return false;
      }
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        let url = reader.result.toString();
        localStorage.setItem("url2", reader.result.toString());
      }
    }
  }

  onSelectFile3(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      if (event.target.files[0].type !== "image/jpeg" && event.target.files[0].type !== "image/png") {
        alert("Pogresan tip dokumenta == " + event.target.files[0].type);
        return false;
      }
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        let url = reader.result.toString();
        localStorage.setItem("url3", reader.result.toString());
      }
    }
  }








  proveraSviPodaciUneti(): boolean {
    this.ErrorMessage = "";
    if (this.name == "") { this.ErrorMessage += "Ime ne sme biti prazno!\n" }
    if (this.middleName == "") { this.ErrorMessage += "Srednje ime ne sme biti prazno!\n" }
    if (this.surname == "") { this.ErrorMessage += "Prezime ne sme biti prazno!\n" }
    if (this.username == "") { this.ErrorMessage += "Korisnicko ime ne sme biti prazno!\n" }
    if (this.password == "") { this.ErrorMessage += "Lozinka ne sme biti prazna!\n" }
    if (this.password2 == "") { this.ErrorMessage += "Morate potvrditi lozinku!\n" }
    if (this.birthdate == "") { this.ErrorMessage += "Datum rodjenja mora biti unet!\n" }
    if (this.residence == "") { this.ErrorMessage += "Mesto prebivalista ne sme biti prazno!\n" }
    if (this.country == "") { this.ErrorMessage += "Zemlja mora biti uneta!\n" }
    if (this.ticketNum == "") { this.ErrorMessage += "Broj clanske karte mora biti unet!\n" }
    if (this.huntingSoc == "") { this.ErrorMessage += "Lovacko udruzenje mora biti uneto!\n" }
    if (this.email == "") { this.ErrorMessage += "Mail mora biti unet!\n" }
    if (this.ErrorMessage == "") return true;
    return false;
  }


  proveraSviPodaciUnetiUdruzenje(): boolean {
    this.ErrorMessage = "";
    if (this.name == "") { this.ErrorMessage += "Ime ne sme biti prazno!\n" }
    if (this.password == "") { this.ErrorMessage += "Lozinka ne sme biti prazna!\n" }
    if (this.password2 == "") { this.ErrorMessage += "Morate potvrditi lozinku!\n" }
    if (this.residence == "") { this.ErrorMessage += "Mesto prebivalista ne sme biti prazno!\n" }
    if (this.country == "") { this.ErrorMessage += "Zemlja mora biti uneta!\n" }
    if (this.email == "") { this.ErrorMessage += "Mail mora biti unet!\n" }
    if (this.ErrorMessage == "") return true;
    return false;
  }

  proveraSviPodaciValidni(): boolean {
    this.ErrorMessage = "";
    if (this.name.length <= 2) { this.ErrorMessage += "Ime ne sme biti krace od 3 slova!\n" }
    if (this.middleName.length <= 2) { this.ErrorMessage += "Srednje ime ne sme biti krace od 3 slova!\n" }
    if (this.surname.length <= 2) { this.ErrorMessage += "Prezime ne sme biti krace od 3 slova!\n" }
    if (this.username.length <= 2) { this.ErrorMessage += "Korisnicko ime ne sme biti krace od 3 slova!\n" }
    if (this.residence.length <= 2) { this.ErrorMessage += "Mesto rodjenja ne sme biti krace od 3 slova!\n" }
    if (this.country.length <= 2) { this.ErrorMessage += "Zemlja ne sme biti krace od 3 slova!\n" }
    if (this.ErrorMessage == "") return true;
    return false;
  }

  proveraSviPodaciValidniUdruzenje(): boolean {
    this.ErrorMessage = "";
    if (this.name.length <= 2) { this.ErrorMessage += "Ime ne sme biti krace od 3 slova!\n" }
    if (this.residence.length <= 2) { this.ErrorMessage += "Mesto rodjenja ne sme biti krace od 3 slova!\n" }
    if (this.country.length <= 2) { this.ErrorMessage += "Zemlja ne sme biti krace od 3 slova!\n" }
    if (this.ErrorMessage == "") return true;
    return false;
  }

  proveraZaTelefon(): boolean {
    this.ErrorMessage = "";
    if (this.phoneNumber.match(this.regexPatternPhone) != null) {
      return true;
    }
    else {
      this.ErrorMessage += "Telefon mora sadrzati samo cifre i biti duzine vece od 5!"
      return false;
    }
  }

  proveraZaLoznike(): boolean {
    this.ErrorMessage = "";
    if (this.password == this.password2) {
      if (this.password.match(this.regexPattern) != null) {
        return true;
      }
      else {
        this.ErrorMessage += "Lozinka mora biti duzine 8 i mora sadrzati jedno veliko slovo, jedan broj i jedan specijalni karakter"
        return false;
      }
    }
    else {
      this.ErrorMessage += "Lozinke se ne poklapaju!";
      return false;
    }
    return false;
  }

  proveraZaUsername(): boolean {
    this.users.forEach(element => {
      if (element.username == this.username) {
        this.ErrorMessage += "Username vec postoji!";
        return false;
      }
    });
    return true;
  }

  proveraZaEmail(): boolean {
    this.users.forEach(element => {
      if (element.email == this.email) {
        this.ErrorMessage += "Email vec postoji!";
        return false;
      }
    });
    return true;
  }


  popuniUsers(): void {
    this.service.dohvatiSveKorisnike().subscribe(data => {
      this.users = JSON.parse(JSON.stringify(data));
      //this.ispisiKorisnike();
    });

  }


  generisiDanasnjiDatum(): String {
    let vreme = new Date();
    let vreme1 = new Date();
    //if (vreme1 > vreme) alert("jebiga")

    //else{ alert("dobro je")}
    let s = ""
    let s1 = "" + vreme;
    s += vreme.getFullYear() + "/"
    let n = vreme.getMonth() + 1

    s += "0" + n + "/" + s1[8] + s1[9];
    //alert(s);
    return s;
  }


  registrujKorisnika(): void {
    if (this.proveraSviPodaciUneti() && this.proveraSviPodaciValidni() && this.proveraZaLoznike() && this.proveraZaTelefon()
      && this.proveraZaUsername()) {
      this.newUser = new User();
      this.newUser.username = this.username;
      this.newUser.password = this.password;
      this.newUser.name = this.name;
      this.newUser.surname = this.surname;
      this.newUser.middleName = this.middleName;
      this.newUser.birthdate = this.birthdate;
      this.newUser.residence = this.residence;
      this.newUser.country = this.country;
      this.newUser.ticketNum = this.ticketNum;
      this.newUser.huntingSoc = this.huntingSoc;
      this.newUser.email = this.email;
      this.newUser.status = "aktivan";
      this.newUser.lastLog = this.generisiDanasnjiDatum();
      this.newUser.phoneNum = this.phoneNumber;
      this.newUser.type = "hunter";
      this.newUser.picture1 = "";
      this.newUser.picture2 = "";
      this.newUser.picture3 = "";
      this.newUser.animals = "";
      this.newUser.favHuntGround = "";
      this.newUser.numMembers = "";
      this.newUser.membership = "";
      this.newUser.publicInfo = null;
      this.service.register(this.newUser).subscribe(user => {
        if (user['user'] == 'ok') {
          this.message = 'OK';
        }
      })
      //this.onSubmit();
      alert("Uspesno registrovan korisnik!");
      this.router.navigate(["/admin"])
    }
    /**/
  }



  registrujUdruzenje(): void {
    if (this.proveraSviPodaciUnetiUdruzenje() && this.proveraSviPodaciValidniUdruzenje() && this.proveraZaLoznike() && this.proveraZaTelefon()
      && this.proveraZaEmail()) {
      this.newUser = new User();
      this.newUser.username = "";
      this.newUser.password = this.password;
      this.newUser.name = this.name;
      this.newUser.surname = "";
      this.newUser.middleName = "";
      this.newUser.birthdate = "";
      this.newUser.residence = this.residence;
      this.newUser.country = this.country;
      this.newUser.ticketNum == "";
      this.newUser.huntingSoc == "";
      this.newUser.email = this.email;
      this.newUser.status = "aktivan";
      this.newUser.lastLog = this.generisiDanasnjiDatum();
      this.newUser.phoneNum = this.phoneNumber;
      this.newUser.type = "society";
      this.newUser.picture1 = "";
      this.newUser.picture2 = "";
      this.newUser.picture3 = "";
      this.newUser.animals = "";
      this.newUser.favHuntGround = "";
      this.newUser.numMembers = this.numMembers;
      this.newUser.membership = this.membership;
      this.newUser.publicInfo = null;
      this.service.register(this.newUser).subscribe(user => {
        if (user['user'] == 'ok') {
          this.message = 'OK';
        }
      })
      //this.onSubmit();
      alert("Uspesno registrovan korisnik");
      this.router.navigate(["/admin"])
    }
    /**/
  }



  /*****************************************************Kontrolna dugmad****************************************************/


  kreirajLovca(): void {
    this.opcija = "lovacKreiranje";
    this.username = "";
    this.password = "";
    this.password2 = "";
    this.name = "";
    this.surname = "";
    this.middleName = "";
    this.birthdate = "";
    this.residence = "";
    this.country = "";
    this.ticketNum = "";
    this.huntingSoc = "";
    this.email = "";
    this.phoneNumber = "";
    this.status = "";
    this.lastLog = "";
    this.type = "";
    this.picture1 = "";
    this.picture2 = "";
    this.picture3 = "";
    this.animals = "";
    this.favHuntGround = "";
    this.numMembers = "";
    this.membership = "";
    this.publicInfo = null;
  }


  kreirajUdruzenje(): void {
    this.opcija = "udruzenjeKreiranje";
    this.username = "";
    this.password = "";
    this.password2 = "";
    this.name = "";
    this.surname = "";
    this.middleName = "";
    this.birthdate = "";
    this.residence = "";
    this.country = "";
    this.ticketNum = "";
    this.huntingSoc = "";
    this.email = "";
    this.phoneNumber = "";
    this.status = "";
    this.lastLog = "";
    this.type = "";
    this.picture1 = "";
    this.picture2 = "";
    this.picture3 = "";
    this.animals = "";
    this.favHuntGround = "";
    this.numMembers = "";
    this.membership = "";
    this.publicInfo = null;
  }

  azurirajKorisnika(): void {
    this.opcija = "azuriranjeKorisnika";
    this.username = "";
    this.password = "";
    this.password2 = "";
    this.name = "";
    this.surname = "";
    this.middleName = "";
    this.birthdate = "";
    this.residence = "";
    this.country = "";
    this.ticketNum = "";
    this.huntingSoc = "";
    this.email = "";
    this.phoneNumber = "";
    this.status = "";
    this.lastLog = "";
    this.type = "";
    this.picture1 = "";
    this.picture2 = "";
    this.picture3 = "";
    this.animals = "";
    this.favHuntGround = "";
    this.numMembers = "";
    this.membership = "";
    this.publicInfo = null;
  }


  izmeniKorisnika(u): void {
    this.opcija = "izmeniKorisnika";
    this.username = u.username;
    this.password = u.password;
    this.password2 = u.password;
    this.name = u.name;
    this.surname = u.surname;
    this.middleName = u.middleName;
    this.birthdate = u.birthdate;
    this.residence = u.residence;
    this.country = u.country;
    this.ticketNum = u.ticketNum;
    this.huntingSoc = u.huntingSoc;
    this.email = u.email;
    this.phoneNumber = u.phoneNum;
    this.status = u.status;
    this.lastLog = u.lastLog;
    this.type = u.type;
    this.picture1 = u.picture1;
    this.picture2 = u.picture2;
    this.picture3 = u.picture3;
    this.animals = u.animals;
    this.favHuntGround = u.favHuntGround;
    this.numMembers = u.numMembers;
    this.membership = u.membership;
    this.publicInfo = u.publicInfo;
  }

  sacuvajIzmeneLovac(): void {
    if (this.proveraSviPodaciUneti() && this.proveraSviPodaciValidni() && this.proveraZaLoznike() && this.proveraZaTelefon()) {

      this.service.obrisiDatogKorisnika(this.username).subscribe(user => {
        if (user['user'] == 'ok') {
          this.message = 'OK';
        }
      });


      this.newUser = new User();
      this.newUser.username = this.username;
      this.newUser.password = this.password;
      this.newUser.name = this.name;
      this.newUser.surname = this.surname;
      this.newUser.middleName = this.middleName;
      this.newUser.birthdate = this.birthdate;
      this.newUser.residence = this.residence;
      this.newUser.country = this.country;
      this.newUser.ticketNum = this.ticketNum;
      this.newUser.huntingSoc = this.huntingSoc;
      this.newUser.email = this.email;
      this.newUser.status = "aktivan";
      this.newUser.lastLog = this.generisiDanasnjiDatum();
      this.newUser.phoneNum = this.phoneNumber;
      this.newUser.type = "hunter";
      if (localStorage.getItem("url1") != null) {
        this.newUser.picture1 = localStorage.getItem("url1");
      }
      else {
        this.newUser.picture1 = this.picture1;
      }
      if (localStorage.getItem("url2") != null) {
        this.newUser.picture2 = localStorage.getItem("url2");
      }
      else {
        this.newUser.picture2 = this.picture2;
      }
      if (localStorage.getItem("url3") != null) {
        this.newUser.picture3 = localStorage.getItem("url3");
      }
      else {
        this.newUser.picture3 = this.picture3;
      }
      this.newUser.animals = this.animals;
      this.newUser.favHuntGround = this.favHuntGround;
      this.newUser.numMembers = "";
      this.newUser.membership = "";
      this.newUser.publicInfo = this.publicInfo;
      this.service.register(this.newUser).subscribe(user => {
        if (user['user'] == 'ok') {
          this.message = 'OK';
        }
      })

      alert("Uspesno ste se izmenili informacije!");
      localStorage.removeItem("url1");
      localStorage.removeItem("url2");
      localStorage.removeItem("url3");
      location.reload();
    }
  }



  /*Uslovi za udruzenja*/
  proveraSviPodaciUneti1(): boolean {
    this.ErrorMessage = "";
    if (this.name == "") { this.ErrorMessage += "Ime ne sme biti prazno!\n" }
    if (this.password == "") { this.ErrorMessage += "Lozinka ne sme biti prazna!\n" }
    if (this.password2 == "") { this.ErrorMessage += "Morate potvrditi lozinku!\n" }
    if (this.residence == "") { this.ErrorMessage += "Mesto prebivalista ne sme biti prazno!\n" }
    if (this.country == "") { this.ErrorMessage += "Zemlja mora biti uneta!\n" }
    if (this.ErrorMessage == "") return true;
    return false;
  }

  proveraSviPodaciValidni1(): boolean {
    this.ErrorMessage = "";
    if (this.name.length <= 2) { this.ErrorMessage += "Ime ne sme biti krace od 3 slova!\n" }
    if (this.residence.length <= 2) { this.ErrorMessage += "Mesto rodjenja ne sme biti krace od 3 slova!\n" }
    if (this.country.length <= 2) { this.ErrorMessage += "Zemlja ne sme biti krace od 3 slova!\n" }
    if (this.ErrorMessage == "") return true;
    return false;
  }


  /*Udruzenje*/
  sacuvajIzmeneUdruzenje(): void {

    if (this.proveraSviPodaciUneti1() && this.proveraSviPodaciValidni1() && this.proveraZaLoznike() && this.proveraZaTelefon()) {

      this.service.obrisiDatoUdruzenje(this.email).subscribe(user => {
        if (user['user'] == 'ok') {
          this.message = 'OK';
        }
      });


      this.newUser = new User();
      this.newUser.username = this.username;
      this.newUser.password = this.password;
      this.newUser.name = this.name;
      this.newUser.surname = this.surname;
      this.newUser.middleName = this.middleName;
      this.newUser.birthdate = this.birthdate;
      this.newUser.residence = this.residence;
      this.newUser.country = this.country;
      this.newUser.ticketNum = this.ticketNum;
      this.newUser.huntingSoc = this.huntingSoc;
      this.newUser.email = this.email;
      this.newUser.status = "aktivan";
      this.newUser.lastLog = this.generisiDanasnjiDatum();
      this.newUser.phoneNum = this.phoneNumber;
      this.newUser.type = "society";
      if (localStorage.getItem("url1") != null) {
        this.newUser.picture1 = localStorage.getItem("url1");
      }
      else {
        this.newUser.picture1 = this.picture1;
      }
      if (localStorage.getItem("url2") != null) {
        this.newUser.picture2 = localStorage.getItem("url2");
      }
      else {
        this.newUser.picture2 = this.picture2;
      }
      if (localStorage.getItem("url3") != null) {
        this.newUser.picture3 = localStorage.getItem("url3");
      }
      else {
        this.newUser.picture3 = this.picture3;
      }
      this.newUser.animals = this.animals;
      this.newUser.favHuntGround = this.favHuntGround;
      this.newUser.numMembers = this.numMembers;
      this.newUser.membership = this.membership;
      this.newUser.publicInfo = this.publicInfo;
      this.service.register(this.newUser).subscribe(user => {
        if (user['user'] == 'ok') {
          this.message = 'OK';
        }
      })

      alert("Uspesno ste se izmenili informacije!");
      localStorage.removeItem("url1");
      localStorage.removeItem("url2");
      localStorage.removeItem("url3");
      location.reload();
    }
  }
}
