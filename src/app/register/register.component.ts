import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../user.model';
import { element } from 'protractor';
import "../../assets/smtp.js";
//import { SMTPClient } from 'emailjs';

declare let Email: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
    this.popuniUsers();
  }



  users: User[] = [];
  newUser: User = null;
  mailText: string;

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

  message: String = "";
  ErrorMessage: String = "";
  //
  regexPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\.,@#$%])[A-Za-z\d\.,@%]{8,}$/;
  regexPatternPhone = /^[0-9]{5,}$/;
  regexPatternMail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/*UNSECURE */
  /*mailMe() {
    window.pozivFje();
    /*
    Email.send({
      Host : "smtp.gmail.com",
      Username : "markoivanovic1828@gmail.com",
      Password : "marko1828ivanovic",
      To : 'quartusdemon2019@gmail.com',
      From : "markoivanovic1828@gmail.com",
      Subject : "Registracija",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );}
    /*SECURE */
    /*
    Email.send({
      SecureToken: "d0ea4d40-0db2-47ad-be07-be8599aaf449",
      To: 'quartusdemon2019@gmail.com',
      From: "markoivanovic1828@gmail.com",
      Subject: "This is the subject",
      Body: "And this is the body"
    }).then(
      message => alert(message)
    );
  }
/*
  onSubmit() {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "quartusdemon2019@gmail.com",
      Password: "F03CF8AF35BF11B19AC17CA36DBCFD0FA25E",
      To: "markoivanovic1828@gmail.com",
      From: "quartusdemon2019@gmail.com",
      Subject: "Registracija",
      Body: "Uspesno ste se registrovali"
    }).then(message => { alert(message); });
  }*/




/*BD85F93F6A11BF85D9899C3D8A9633940301 */
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


  popuniUsers(): void {
    this.service.dohvatiSveKorisnike().subscribe(data => {
      this.users = JSON.parse(JSON.stringify(data));
      //this.ispisiKorisnike();
    });

  }

  ispisiKorisnike(): void {
    this.users.forEach(element => {
      alert(element.username);
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


  


  register(): void {
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
      alert("Uspesno ste se registrovali, sada se mozete ulogovati!");
      this.router.navigate(["/logovanje"])
    }
    /**/
  }

}
