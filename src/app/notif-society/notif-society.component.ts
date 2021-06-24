import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-notif-society',
  templateUrl: './notif-society.component.html',
  styleUrls: ['./notif-society.component.css']
})
export class NotifSocietyComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
    this.dohvatiSveNotifikacije();
  }

  notifications: Notification[]= [];


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

  ispisiNotifikacije():void{
    this.notifications.forEach(element => {
      alert(element.title)
    });
  }
}
