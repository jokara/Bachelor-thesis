import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notification } from '../notification.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin-notif',
  templateUrl: './admin-notif.component.html',
  styleUrls: ['./admin-notif.component.css']
})
export class AdminNotifComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }


  ngOnInit() {
    this.dohvatiSveNotifikacije();
    this.opcija= localStorage.getItem("obavestenja");
  }

  notifications: Notification[]= [];
  opcija: String="";
  naziv: String ="";
  datum: String ="";
  tekst: String ="";
  vidljivost: String = "svi";

  novaNotif: Notification = null;

  

  dohvatiSveNotifikacije():void{
    this.service.dohvatiSvaObavestenja().subscribe(data => {
      this.notifications = JSON.parse(JSON.stringify(data));
      //this.ispisiNotifikacije();
    });
  }

  func(): void {
    localStorage.removeItem("ulogovan");
    this.router.navigate(['/logovanje']);
  }
  
  func1():void{
    localStorage.setItem("obavestenja","pregled");
    this.router.navigate(['/admin_obavestenja'])
  }


  sacuvajNotifikaciju(): void{
    if (this.naziv!="" && this.datum!= "" && this.tekst!=""){
      this.novaNotif = new Notification();
      this.novaNotif.title=this.naziv;
      this.novaNotif.content=this.tekst;
      this.novaNotif.date=this.datum;
      this.novaNotif.visibility=this.vidljivost;
      this.service.dodajNovoObavestenje(this.novaNotif).subscribe(user=>{
        if(user['user']=='ok'){
          //this.message='OK';
        }  
      });
      alert("Uspesno ste dodali novo obavestenje!");
      location.reload();
    }
    else{
      alert("Morate popuniti sva polja");
    }
  }


}
