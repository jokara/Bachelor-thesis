import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../question.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin-questions',
  templateUrl: './admin-questions.component.html',
  styleUrls: ['./admin-questions.component.css']
})
export class AdminQuestionsComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
    this.dohvatiSvaPitanja();

  }
  opcija: String = ""
  odgovor: String = ""
  pitanja: Question[] = [];
  pitanjaZaOdgovore: Question[] = [];
  pitanje: Question = null;

  func(): void {
    localStorage.removeItem("ulogovan");
    this.router.navigate(['/logovanje']);
  }

  func1(): void {
    localStorage.setItem("obavestenja", "pregled");
    this.router.navigate(['/admin_obavestenja'])
  }
	
/*napravi pitanja*/	
  napraviPitanjaZaOdgovaranje(): void {
    this.pitanja.forEach(element => {
      if (element.answer == "") {
        this.pitanjaZaOdgovore.push(element);
      }
    });
  }
  
  /*dohvati pitanja admin*/

  dohvatiSvaPitanja(): void {
    this.service.dohvatiSvaPitanja().subscribe(data => {
      this.pitanja = JSON.parse(JSON.stringify(data));
      this.napraviPitanjaZaOdgovaranje();
    });
  }
	/*izaberi prikaz admin*/

  izaberi(p): void {
    this.opcija = "prikaz";
    this.pitanje = p;
  }
	/*sacuvaj izmene admin*/
  sacuvajIzmene(): void {
    if (this.odgovor != "") {
      this.service.promeniOdgovorPitanja(this.pitanje.question, this.odgovor).subscribe(data => {
      });

      location.reload();
      alert("Uspesno ste odgovorili na pitanje!")
    }
    else{
      alert("Molimo Vas popunite polje za odgovor!")
    }
  }

}
