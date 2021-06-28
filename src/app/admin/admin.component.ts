import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {

  }
  /*raspakivanje zipa rekurzivno*/
  async function extractZip(source, target) {
	  try {
		await extract(source, { dir: target });
		console.log("Extraction complete");
	  } catch (err) {
		console.log("Oops: extractZip failed", err);
	  }
	}
	
  /*brisanje iz local storage-a*/
  func(): void {
    localStorage.removeItem("ulogovan");
    this.router.navigate(['/logovanje']);
  }

  func1():void{
    localStorage.setItem("obavestenja","pregled");
    this.router.navigate(['/admin_obavestenja'])
  }
	
	
  kategorijaVesti(): void {
    localStorage.setItem("vesti","kategorija");
    this.router.navigate(['/admin_vesti']);
  }

  obrisiVest(): void {
    localStorage.setItem("vesti","brisanje");
    this.router.navigate(['/admin_vesti']);
  }

  azuriranjeSifrarnika(): void {
    localStorage.setItem("vesti","kategorija");
    this.router.navigate(['/admin_sifrarnik']);
  }


  dodavanjaObavestenja(): void {
    localStorage.setItem("obavestenja","dodavanje");
    this.router.navigate(['/admin_obavestenja']);
  }

  statistikaLovci(): void {
    localStorage.setItem("statistika","lovci");
    this.router.navigate(['/admin_statistika']);
  }

  statistikaUdruzenja(): void {
    localStorage.setItem("statistika","udruzenja");
    this.router.navigate(['/admin_statistika']);
  }

  kreiranjeIzvestaja(): void {
    localStorage.setItem("report","izvestaj");
    this.router.navigate(['/admin_izvestaj']);
  }

  reklame(): void{
    this.router.navigate(['/admin_reklama']);
  }

  azuriranjeKorisnika(): void{
    this.router.navigate(['/admin_azuriranje']);
  }

  odgovoriKorisnika(): void{
    this.router.navigate(['/admin_odgovori']);
  }


}
