import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../news.model';
import { UsersService } from '../users.service';
import {FormControl} from '@angular/forms';
import { Codebook } from '../codebook.model';
import { CodebookElem } from '../codebookElem.model';


@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css']
})
export class AdminNewsComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
    this.opcija = localStorage.getItem("vesti");
    this.dohvatiSveVesti();
    this.dohvatiSveSifrarnike();
  }

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  sveVesti: News[] = [];
  izabranaVest: News = null;
  kategorija: any
  opcija: String="";
  /**********************************/
  sviSifrarnici: Codebook[]=[];
  /**********************************/

  keyword = 'name';
  data :CodebookElem[] = [];

  func(): void {
    localStorage.removeItem("ulogovan");
    this.router.navigate(['/logovanje']);
  }

  dohvatiSveVesti(): void {
    this.service.dohvatiSveVesti().subscribe(data => {
      this.sveVesti = JSON.parse(JSON.stringify(data));
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
      if (this.kategorija instanceof Object){
        if (elem.name==this.kategorija.name) i=1; 
      }
      else{
        if (elem.name==this.kategorija) i=1; 
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
    if (this.kategorija instanceof Object){
      noviElem.name=this.kategorija.name;
    }
    else{
      noviElem.name=this.kategorija;
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

  /**************************************************************************************************************************/

  izaberi(v):void{
    this.izabranaVest= new News();
    this.izabranaVest.title=v.title;
    this.izabranaVest.content=v.content;
    this.izabranaVest.category=v.category;
    this.izabranaVest.date=v.date;
    this.izabranaVest.picture=v.picture;
    this.izabranaVest.creator=v.creator;
    this.izabranaVest.author=v.author;
    this.izabranaVest.visibility=v.visibility;
    this.kategorija=v.category;
  }


  sacuvajIzmene(): void{ 
    if (this.kategorija instanceof Object){
      this.service.promeniKategorijuVesti(this.izabranaVest.title, this.kategorija.name).subscribe(data => {
      });
    }
    else{
      this.service.promeniKategorijuVesti(this.izabranaVest.title, this.kategorija).subscribe(data => {
      });
    }
    this.azuriranjeUBaziSaProverama();
    alert("Kategorija vesti je uspesno promenjena!");
    location.reload();
  }

  obrisi(naziv):void{
    this.service.obrisiVest(naziv).subscribe(data => {
    });
    alert("Uspesno ste obrisali vest!");
    location.reload();
  }

  func1():void{
    localStorage.setItem("obavestenja","pregled");
    this.router.navigate(['/admin_obavestenja'])
  }
}
