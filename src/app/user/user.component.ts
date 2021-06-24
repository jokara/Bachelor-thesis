import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../user.model';
import { Group } from '../group.model';
import { News } from '../news.model';
import { element } from 'protractor';
import { Question } from '../question.model';
import { preserveWhitespacesDefault, ThrowStmt } from '@angular/compiler';
import { Commercial } from '../commercial.model';
import { Codebook } from '../codebook.model';
import { CodebookElem } from '../codebookElem.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
    /*Sva inicijalizacija ugnjezdena zbog vremena*/
    this.ulogovan = localStorage.getItem("ulogovan");
    this.dohvatiSveVesti();
    this.dohvatiSvaPitanja();
    this.inicijalizacijaNizaCekiranih();
    this.dohvatiSveSifrarnike();
  }

  ulogovan: String = "";

  nazivVesti: String = "";
  tekstVesti: String = "";
  kategorijaVesti: any;
  datumPostavljanjaVesti: String = "";
  fotografija: String = "";
  autor: String = "";
  vidljivost: String = "";

  vestNova: News = null;

  opcija: String = "";
  grupe: Group[] = [];
  users: User[] = [];
  cekirano: Boolean[] = [];
  sveVesti: News[] = [];
  sveVestiZaKorisnika: News[] = [];
  poruka: String = "";


  razbijenaGrupa: String = "";
  nazivGrupe: String = "";
  novaGrupa: Group = null;

  pitanjeKreiranje: Question = null;
  pitanja: Question[] = [];
  pitanjeNovo: String = " "

  /*osnovni podaci o korisniku*/
  name: String = "";
  surname: String = "";
  birthdate: String = "";
  phoneNumber: String = "";
  residence: String = "";
  country: String = "";
  picture1: String = "";
  picture2: String = "";
  picture3: String = "";
  email: String = "";
  password: String = "";
  password2: String = "";
  /*dodatni podaci o korisniku*/
  animals: String = "";
  favHuntGround: String = "";


  nizJavnih: Boolean[] = [];
  userPregledInfo: User = null;
  brojSlika: String = "1";
  ErrorMessage: String = ""
  newUser: User = null;
  message: String = "";

  /*Reklame*/
  reklame: Commercial[] = [];
  reklameZaKorisnika: Commercial[] = [];

  /*Grupe za prikaz */

  grupeZaBiranje: Group[] = [];


  dohvatiSveGrupeKorisnikove(): void {
    this.grupe.forEach(element => {
      if (element.creator == localStorage.getItem("ulogovan")) {
        this.grupeZaBiranje.push(element);
      }
    });
  }


  /*Pretraga*/

  korisniciZaPrikaz: User[] = [];
  prikazPretraga: String = "";
  unesiteImePretraga: String = "";
  imeLovcaPretraga: String = "";

  /**********************************/
  sviSifrarnici: Codebook[]=[];
  /**********************************/

  keyword = 'name';
  data :CodebookElem[] = [];


  /* Regexi*/
  regexPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\.,@#$%])[A-Za-z\d\.,@%]{8,}$/;
  regexPatternPhone = /^[0-9]{5,}$/;
  regexPatternMail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  /************************************************Dugmici za kontrolisanje prikazivanja************************************/

  func(): void {
    localStorage.removeItem("ulogovan");
    this.router.navigate(['/logovanje']);
  }

  prikazVesti(): void {
    this.opcija = "vestiPrikaz";
  }

  novaVest(): void {
    localStorage.removeItem("url");
    this.opcija = "novaVest";
  }

  novoPitanje(): void {
    this.opcija = "novoPitanje";
  }

  pregledInfo(): void {
    this.inicijalizacijaJavnihInfoBool();
    this.opcija = "pregledInfo";
  }


  pretraga(): void {
    this.opcija = "pretraga"
  }

  prikazPitanja(): void {
    this.opcija = "prikazPitanja"
  }

  /*************************************************Popunjavanje svih nizova************************************************/

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      if (event.target.files[0].type !== "image/jpeg" && event.target.files[0].type !== "image/png") {
        alert("Pogresan tip dokumenta == " + event.target.files[0].type);
        return false;
      }
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        let url = reader.result.toString();
        localStorage.setItem("url", reader.result.toString());
      }

    }

  }

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



  dohvatiSvaPitanja(): void {
    this.service.pitanjaPoKorisniku(localStorage.getItem("ulogovan")).subscribe(data => {
      this.pitanja = JSON.parse(JSON.stringify(data));
    });
  }

  dohvatiSveVesti(): void {
    this.service.dohvatiSveVesti().subscribe(data => {
      this.sveVesti = JSON.parse(JSON.stringify(data));
      this.popuniUsers();
    });
  }


  dohvatiSveGrupe(): void {
    this.service.dohvatiSveGrupe().subscribe(data => {
      this.grupe = JSON.parse(JSON.stringify(data));
      this.dohvatiSveGrupeKorisnikove();
      this.pakovanjeVestiZaKorisnika();
      this.popuniNizReklamaZaKorisnika();
    });
  }

  popuniUsers(): void {
    this.service.dohvatiSveKorisnike().subscribe(data => {
      this.users = JSON.parse(JSON.stringify(data));
      this.dohvatiSveReklame();

      this.ulogovanULocal();
      //this.ispisiKorisnike();
    });
  }

  dohvatiSveReklame(): void {
    this.service.dohvatiSveReklame().subscribe(data => {
      this.reklame = JSON.parse(JSON.stringify(data));
      this.dohvatiSveGrupe();
    });
  }

  inicijalizacijaNizaCekiranih(): void {
    for (let index = 1; index < 100; index++) {
      this.cekirano[index] = false
    }
  }


  /*****************************************Prikaz vesti + pakovanje********************************************************/

  pakovanjeVestiZaKorisnika(): void {
    this.sveVesti.forEach(e => {
      if (e.visibility == "svi" || e.visibility == "sviLovci" || e.creator == localStorage.getItem("ulogovan")) {
        this.sveVestiZaKorisnika.push(e);
      }
      else {
        if (e.visibility != "svaUdruzenja") {
          this.grupe.forEach(elem => {
            if (elem.name == e.visibility) {
              let podeljeno = elem.members.split("/");
              for (let i = 0; i < podeljeno.length - 1; i++) {
                if (podeljeno[i] == localStorage.getItem("ulogovan")) {
                  this.sveVestiZaKorisnika.push(e);
                }
              }
            }
          });
        }
      }
    });
  }







  /*******************************************Pravljenje nove vesti********************************************************/

  proveraPopunjenaNeophodnaPolja(): boolean {
    if (this.nazivVesti != "" && this.tekstVesti != "" && this.kategorijaVesti != "") return true;
    else return false;
  }

  proveraVidljivosti(): boolean {
    if (this.vidljivost == "svi" || this.vidljivost == "svaUdruzenja" || this.vidljivost == "sviLovci") return true;
    else {
      if (this.vidljivost == "postojecaGrupa" && this.nazivGrupe != "") {
        return true;
      }
      else {
        if (this.vidljivost == "grupa" && this.nazivGrupe != "") {
          this.grupe.forEach(element => {
            if (element.name == this.nazivGrupe) {
              this.poruka += "Grupa vec postoji!";
              return false;
            }
          });
          this.poruka = "";
          this.vidljivost = this.nazivGrupe;
          return true;
        }
        else {
          this.poruka += "Sva polja moraju biti popunjena!";
        }
      }
    }
  }

  proveraNestoCekirano(): boolean {
    if (this.vidljivost == "svi" || this.vidljivost == "svaUdruzenja" || this.vidljivost == "sviLovci" || this.vidljivost == "postojecaGrupa") return true;
    if (this.vidljivost == "grupa") {
      if (this.kreirajStringZaGrupu() != "") {
        return true;
      }
      else return false;
    }
  }

  kreirajVest(): void {
    this.azuriranjeUBaziSaProverama();
    if (this.proveraPopunjenaNeophodnaPolja() && this.proveraNestoCekirano() && this.proveraVidljivosti()) {
      this.vestNova = new News();
      this.vestNova.title = this.nazivVesti;
      this.vestNova.content = this.tekstVesti;
      if (this.kategorijaVesti instanceof Object){
        this.vestNova.category = this.kategorijaVesti.name;
      }
      else{
        this.vestNova.category = this.kategorijaVesti;
      }
      this.vestNova.date = this.generisiDanasnjiDatum();
      if (localStorage.getItem("url") != null) {
        this.vestNova.picture = localStorage.getItem("url");
      }
      else {
        this.vestNova.picture = "";
      }
      this.vestNova.creator = localStorage.getItem("ulogovan");
      this.vestNova.author = this.autor;
      this.vestNova.visibility = this.vidljivost;
      if (this.vidljivost == "postojecaGrupa"){
        this.vestNova.visibility = this.nazivGrupe;
      }
      if (this.vidljivost != "svi" && this.vidljivost != "sviLovci" && this.vidljivost != "svaUdruzenja" &&  this.vidljivost != "postojecaGrupa") {
        /*Nova grupa++*/
        this.novaGrupa = new Group();
        this.novaGrupa.name = this.nazivGrupe;
        this.novaGrupa.members = this.kreirajStringZaGrupu();
        this.novaGrupa.creator = localStorage.getItem("ulogovan");
        this.service.dodajNovuGrupu(this.novaGrupa).subscribe(user => {
        })
      }
      this.service.novaVest(this.vestNova).subscribe(user => {
      })
      alert("Uspesno ste kreirali novu vest!");
      //redirekcija na istu stranicu  
      localStorage.removeItem("url");
      location.reload();
    }
  }

  kreirajStringZaGrupu(): string {
    let s = "";
    for (let i = 0; i < this.users.length; i++) {
      if (this.cekirano[i] == true) {
        if (this.users[i].type == "hunter") {
          s += this.users[i].username + "/";
        }
        if (this.users[i].type == "society") {
          s += this.users[i].email + "/"
        }
      }
    }
    return s;
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


  /*************************************************Postavljanje pitanja *****************************************************/

  proveraDaLiJeUnetoPitanje(): boolean {
    if (this.pitanjeNovo == "") return false;
    else return true;
  }

  kreirajPitanje(): void {
    if (this.proveraDaLiJeUnetoPitanje()) {
      this.pitanjeKreiranje = new Question();
      this.pitanjeKreiranje.creator = localStorage.getItem("ulogovan");
      this.pitanjeKreiranje.question = this.pitanjeNovo;
      this.pitanjeKreiranje.answer ="";
      this.service.dodajNovoPitanje(this.pitanjeKreiranje).subscribe(user => {
      })
      alert("Vase pitanje je uspesno prosledjeno!");
      location.reload();
    }
  }

  /******************************************Arhiviranje i brisanje vesti*************************************************** */

  arhivirajVest(naslov) {
    this.service.promeniVidljivostVesti(naslov, "niko").subscribe(data => {
    });
    alert("Vest je arhivirana");
    location.reload();
  }


  obrisiVest(naslov) {
    this.service.promeniVidljivostVesti(naslov, "obrisi").subscribe(data => {
    });
    alert("Zahtev je generisan!");
    location.reload();
  }


  /******************************************Pregled i izmena informacija o korisniku, dizanje korisnika u local*************/
  /*Treba dodati i za udruzenja*/
  ulogovanULocal(): void {
    this.users.forEach(element => {
      if (element.username == localStorage.getItem("ulogovan")) {
        localStorage.setItem("user", JSON.stringify(element));
        this.postaviUserPregledInfo();
      }
    });
  }

  postaviUserPregledInfo(): void {
    this.users.forEach(element => {
      if (element.username == localStorage.getItem("ulogovan")) {
        this.userPregledInfo = element;
      }
    });
    this.postaviPodrazumevaneVrednosti();
    this.inicijalizacijaJavnihInfoBool();
    //this.popunjavanjeJavnihBool();
    for (let i = 0; i < this.userPregledInfo.publicInfo.length; i++) {
      this.nizJavnih[i] = this.userPregledInfo.publicInfo[i];
    }
  }

  postaviPodrazumevaneVrednosti(): void {
    this.name = this.userPregledInfo.name;
    this.surname = this.userPregledInfo.surname;
    this.birthdate = this.userPregledInfo.birthdate;
    this.phoneNumber = this.userPregledInfo.phoneNum;
    this.residence = this.userPregledInfo.residence;
    this.country = this.userPregledInfo.country;
    this.picture1 = this.userPregledInfo.picture1;
    this.picture2 = this.userPregledInfo.picture2;
    this.picture3 = this.userPregledInfo.picture3;
    this.email = this.userPregledInfo.email;
    this.password = this.userPregledInfo.password;
    this.password2 = this.userPregledInfo.password;
    this.animals = this.userPregledInfo.animals;
    this.favHuntGround = this.userPregledInfo.favHuntGround;
  }

  inicijalizacijaJavnihInfoBool(): void {
    for (let i = 0; i < 10; i++) {
      this.nizJavnih[i] = false;
    }
  }

  /*popunjavanjeJavnihBool(): void{
    if (this.userPregledInfo.publicInfo!=""){
      let s=this.userPregledInfo.publicInfo.split("/");
      for (let i = 0; i < s.length-1; i++) {
        if (s[i]=="true"){
          this.nizJavnih[i]=true;
        }
        else{
          this.nizJavnih[i]=false;
        }
      }
      //alert(this.nizJavnih[0]);
    }
  }*/

  sacuvajIzmene(): void {

    if (this.proveraSviPodaciUneti() && this.proveraSviPodaciValidni() && this.proveraZaLoznike() && this.proveraZaTelefon()) {

      this.service.obrisiDatogKorisnika(this.userPregledInfo.username).subscribe(user => {
        if (user['user'] == 'ok') {
          this.message = 'OK';
        }
      });


      this.newUser = new User();
      this.newUser.username = this.userPregledInfo.username;
      this.newUser.password = this.password;
      this.newUser.name = this.name;
      this.newUser.surname = this.surname;
      this.newUser.middleName = this.userPregledInfo.middleName;
      this.newUser.birthdate = this.birthdate;
      this.newUser.residence = this.residence;
      this.newUser.country = this.country;
      this.newUser.ticketNum = this.userPregledInfo.ticketNum;
      this.newUser.huntingSoc = this.userPregledInfo.huntingSoc;
      this.newUser.email = this.email;
      this.newUser.status = "aktivan";
      this.newUser.lastLog = this.generisiDanasnjiDatum();
      this.newUser.phoneNum = this.phoneNumber;
      this.newUser.type = "hunter";
      if (localStorage.getItem("url1") != null) {
        this.newUser.picture1 = localStorage.getItem("url1");
      }
      else {
        this.newUser.picture1 = this.userPregledInfo.picture1;
      }
      if (localStorage.getItem("url2") != null) {
        this.newUser.picture2 = localStorage.getItem("url2");
      }
      else {
        this.newUser.picture2 = this.userPregledInfo.picture2;
      }
      if (localStorage.getItem("url3") != null) {
        this.newUser.picture3 = localStorage.getItem("url3");
      }
      else {
        this.newUser.picture3 = this.userPregledInfo.picture3;
      }
      this.newUser.animals = this.animals;
      this.newUser.favHuntGround = this.favHuntGround;
      this.newUser.numMembers = "";
      this.newUser.membership = "";
      this.newUser.publicInfo = this.nizJavnih;
      this.service.register(this.newUser).subscribe(user => {
        if (user['user'] == 'ok') {
          this.message = 'OK';
        }
      })

      alert("Uspesno ste se izmenili svoje informacije!");
      localStorage.removeItem("url1");
      localStorage.removeItem("url2");
      localStorage.removeItem("url3");
      location.reload();
    }
  }

  kreirajStringZaKorisnika(): string {
    let s = "";
    for (let i = 0; i < this.nizJavnih.length; i++) {
      if (this.nizJavnih[i] == true) {
        s += "true/";
      }
      else {
        s += "false/";
      }
    }
    return s;
  }


  proveraSviPodaciUneti(): boolean {
    this.ErrorMessage = "";
    if (this.name == "") { this.ErrorMessage += "Ime ne sme biti prazno!\n" }
    if (this.surname == "") { this.ErrorMessage += "Prezime ne sme biti prazno!\n" }
    if (this.password == "") { this.ErrorMessage += "Lozinka ne sme biti prazna!\n" }
    if (this.password2 == "") { this.ErrorMessage += "Morate potvrditi lozinku!\n" }
    if (this.birthdate == "") { this.ErrorMessage += "Datum rodjenja mora biti unet!\n" }
    if (this.residence == "") { this.ErrorMessage += "Mesto prebivalista ne sme biti prazno!\n" }
    if (this.country == "") { this.ErrorMessage += "Zemlja mora biti uneta!\n" }
    if (this.email == "") { this.ErrorMessage += "Mail mora biti unet!\n" }
    if (this.ErrorMessage == "") return true;
    return false;
  }

  proveraSviPodaciValidni(): boolean {
    this.ErrorMessage = "";
    if (this.name.length <= 2) { this.ErrorMessage += "Ime ne sme biti krace od 3 slova!\n" }
    if (this.surname.length <= 2) { this.ErrorMessage += "Prezime ne sme biti krace od 3 slova!\n" }
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



  /************************************************Pretraga******************************************************************/


  pretraziSveLovce() {
    this.unesiteImePretraga = "0";
    while (this.korisniciZaPrikaz.length > 0) {
      this.korisniciZaPrikaz.pop();
    }
    this.users.forEach(element => {
      if (element.type == "hunter") {
        this.korisniciZaPrikaz.push(element);
      }
    });
    this.prikazPretraga = "mozeLovac";
  }

  pretraziSvaUdruzenja() {
    this.unesiteImePretraga = "0";
    while (this.korisniciZaPrikaz.length > 0) {
      this.korisniciZaPrikaz.pop();
    }
    this.users.forEach(element => {
      if (element.type == "society") {
        this.korisniciZaPrikaz.push(element);
        if (element.publicInfo != null) {
        }
      }
    });
    this.prikazPretraga = "mozeUdruzenje";
  }

  pretragaPoImenuLovaca(): void {
    this.unesiteImePretraga = "1";
  }

  pretragaPoImenuUdruzenja(): void {
    this.unesiteImePretraga = "2";
  }

  pretraziLovcePoImenu(): void {
    this.unesiteImePretraga = "0";
    while (this.korisniciZaPrikaz.length > 0) {
      this.korisniciZaPrikaz.pop();
    }
    this.users.forEach(element => {
      if (element.type == "hunter" && element.name == this.imeLovcaPretraga) {
        this.korisniciZaPrikaz.push(element);
      }
    });
    this.prikazPretraga = "mozeLovac";
  }

  pretraziUdruzenjaPoImenu(): void {
    this.unesiteImePretraga = "0";
    while (this.korisniciZaPrikaz.length > 0) {
      this.korisniciZaPrikaz.pop();
    }
    this.users.forEach(element => {
      if (element.type == "society" && element.name == this.imeLovcaPretraga) {
        this.korisniciZaPrikaz.push(element);
      }
    });
    this.prikazPretraga = "mozeUdruzenje";
  }



  /**Reklame*/

  popuniNizReklamaZaKorisnika(): void {
    this.reklame.forEach(e => {
      if (e.visibility == "svi" || e.visibility == "sviLovci") {
        this.reklameZaKorisnika.push(e);
      }
      else {
        if (e.visibility != "svaUdruzenja") {
          this.grupe.forEach(elem => {
            if (elem.name == e.visibility) {
              let podeljeno = elem.members.split("/");
              for (let i = 0; i < podeljeno.length - 1; i++) {
                if (podeljeno[i] == localStorage.getItem("ulogovan")) {
                  this.reklameZaKorisnika.push(e);
                }
              }
            }
          });
        }
      }
    });
  }



  /***************************************************SIFRARNICI************************************************************/
  dohvatiSveSifrarnike(): void {
    this.service.dohvatiSveSifrarnike().subscribe(data => {
      this.sviSifrarnici = JSON.parse(JSON.stringify(data));
      this.popuniSifrarnikKategorije();
      
    });
  }

  popuniSifrarnikKategorije(): void{
    this.sviSifrarnici.forEach(element => {
      if (element.name=="category"){
        element.setElements.forEach(elem => {
          this.data.push(elem);
        });
      }
    });
  }

  proveraDaLiPostojiRecUSifrarniku():boolean{
    let i=0
    this.data.forEach(elem => {
      if (this.kategorijaVesti instanceof Object){
        if (elem.name==this.kategorijaVesti.name) i=1; 
      }
      else{
        if (elem.name==this.kategorijaVesti) i=1; 
      }
    });
    if (i==1) return true;
    else return false;
  }

  noviIdTrazenje():number{
    let id=0
    this.data.forEach(elem => {
      if (elem.id>id) id=elem.id; 
    });

    id= id+1;
    return id;
  }

  ubacivanjeNovogElementaUNiz():void{
    let noviElem = new CodebookElem();
    noviElem.id=this.noviIdTrazenje();
    if (this.kategorijaVesti instanceof Object){
      noviElem.name=this.kategorijaVesti.name;
    }
    else{
      noviElem.name=this.kategorijaVesti;
    }
    this.data.push(noviElem);
  }

  azuriranjeUBaziSaProverama(): void{
    if (this.proveraDaLiPostojiRecUSifrarniku()==false){
      this.ubacivanjeNovogElementaUNiz();
      //alert("dodje do ovde")
      this.service.obrisiSifrarnik("category").subscribe(data => {
      });
      let sifrarnik = new Codebook();
      sifrarnik.name="category";
      sifrarnik.setElements = this.data;
      this.service.dodajNoviSifrarnik(sifrarnik).subscribe(data => {
      });
    }
  }

}
