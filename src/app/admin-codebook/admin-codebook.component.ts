import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Codebook } from '../codebook.model';
import { CodebookElem } from '../codebookElem.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin-codebook',
  templateUrl: './admin-codebook.component.html',
  styleUrls: ['./admin-codebook.component.css']
})
export class AdminCodebookComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
    this.dohvatiSveSifrarnike();
  }

  kategorijaVesti: any;
  /**********************************/
  sviSifrarnici: Codebook[]=[];
  /**********************************/

  keyword = 'name';
  data :CodebookElem[] = [];


  func(): void {
    localStorage.removeItem("ulogovan");
    this.router.navigate(['/logovanje']);
  }

  func1():void{
    localStorage.setItem("obavestenja","pregled");
    this.router.navigate(['/admin_obavestenja'])
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
    if (this.proveraDaLiPostojiRecUSifrarniku()==false && this.kategorijaVesti!=""){
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

  dodaj(): void{
    this.azuriranjeUBaziSaProverama();
    location.reload();
  }


}
