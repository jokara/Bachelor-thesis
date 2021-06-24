import { Component, OnInit } from '@angular/core';
import { Notification } from '../notification.model';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-notif-unreg',
  templateUrl: './notif-unreg.component.html',
  styleUrls: ['./notif-unreg.component.css']
})
export class NotifUnregComponent implements OnInit {

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

  ispisiNotifikacije():void{
    this.notifications.forEach(element => {
      alert(element.title)
    });
  }

}
