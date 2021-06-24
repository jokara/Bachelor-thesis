import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commercial } from '../commercial.model';
import { Group } from '../group.model';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin-commercial',
  templateUrl: './admin-commercial.component.html',
  styleUrls: ['./admin-commercial.component.css']
})
export class AdminCommercialComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
    localStorage.removeItem("url0");
    this.popuniUsers();
  }

  fotografija: String = "";
  vidljivost: String = "";
  grupe: Group[] = [];
  users: User[] = [];
  cekirano: Boolean[] = [];
  razbijenaGrupa: String = "";
  nazivGrupe: String = "";
  novaGrupa: Group = null;
  poruka: String = "";
  reklama: Commercial = null;

  grupeZaBiranje: Group[] = [];


  dohvatiSveGrupeKorisnikove(): void {
    this.grupe.forEach(element => {
      if (element.creator == localStorage.getItem("ulogovan")) {
        this.grupeZaBiranje.push(element);
      }
    });
  }

  func(): void {
    localStorage.removeItem("ulogovan");
    this.router.navigate(['/logovanje']);
  }



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
        localStorage.setItem("url0", reader.result.toString());
      }

    }

  }

  dohvatiSveGrupe(): void {
    this.service.dohvatiSveGrupe().subscribe(data => {
      this.grupe = JSON.parse(JSON.stringify(data));
      this.dohvatiSveGrupeKorisnikove();
    });
  }

  popuniUsers(): void {
    this.service.dohvatiSveKorisnike().subscribe(data => {
      this.users = JSON.parse(JSON.stringify(data));
      this.dohvatiSveGrupe();
    });

  }

  inicijalizacijaNizaCekiranih(): void {
    for (let index = 1; index < 40; index++) {
      this.cekirano[index] = false
    }
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

  proveraPopunjenaNeophodnaPolja(): boolean {
    if (localStorage.getItem("url0")!=null) return true;
    else return false;
  }



  kreirajReklamu(): void {
    if (this.proveraPopunjenaNeophodnaPolja() && this.proveraNestoCekirano() && this.proveraVidljivosti()) {
      this.reklama = new Commercial();
      if (localStorage.getItem("url0") != null) {
        this.reklama.picture = localStorage.getItem("url0");
      }
      else {
        this.reklama.picture = "";
      }
      this.reklama.visibility = this.vidljivost;
      if (this.vidljivost == "postojecaGrupa"){
        this.reklama.visibility = this.nazivGrupe;
      }
      if (this.vidljivost != "svi" && this.vidljivost != "sviLovci" && this.vidljivost != "svaUdruzenja" &&  this.vidljivost != "postojecaGrupa") {
        /*Nova grupa++*/
        this.novaGrupa = new Group();
        this.novaGrupa.name = this.nazivGrupe;
        this.novaGrupa.creator=localStorage.getItem("ulogovan");
        this.novaGrupa.members = this.kreirajStringZaGrupu();
      //  alert(this.novaGrupa.members)
        this.service.dodajNovuGrupu(this.novaGrupa).subscribe(user => {
        })
      }
      this.service.novaReklama(this.reklama).subscribe(user => {
      })
      alert("Uspesno ste kreirali novu reklamu!");
      //redirekcija na istu stranicu  
      location.reload();
      localStorage.removeItem("url0");
    }
  }

}
