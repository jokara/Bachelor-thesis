import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../news.model';
import { Notification } from '../notification.model';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css']
})
export class AdminReportComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
    this.popuniUsers();
    this.dohvatiSveVesti();
    this.dohvatiSveNotifikacije();
  }

  func():void{
    localStorage.removeItem("ulogovan");
    this.router.navigate(['/logovanje']);
  }

  opcija: String = "";
  datum1: String = "";
  datum2: String = "";
  brojUlogovanih: number = 0;
  brojVesti: number = 0;
  brojLovacaUlogovanih: number = 0;
  brojUdruzenjaUlogovanih: number = 0;
  brojObavestenja: number = 0;
  users: User[] = [];
  sveVesti: News[] = [];
  obavestenja: Notification[] = [];

  izvezi(): void {
    if (this.datum1 != "" && this.datum2 != "") {
      let date1 = new Date(this.datum1.toString());
      let date2 = new Date(this.datum2.toString());

      this.obavestenja.forEach(elem => {
        let date3=new Date(elem.date.toString());
        if (date3<=date2 && date3>=date1){
          this.brojObavestenja = this.brojObavestenja + 1;
        }
      });

      this.users.forEach(elem => {
        let date3=new Date(elem.lastLog.toString());
        if (date3<=date2 && date3>=date1){
          this.brojUlogovanih = this.brojUlogovanih + 1;
        }
      });

      this.sveVesti.forEach(elem => {
        let date3=new Date(elem.date.toString());
        if (date3<=date2 && date3>=date1){
          this.brojVesti = this.brojVesti + 1;
        }
      });

      this.users.forEach(elem => {
        let date3=new Date(elem.lastLog.toString());
        if (date3<=date2 && date3>=date1 && elem.type=="hunter"){
          this.brojLovacaUlogovanih = this.brojLovacaUlogovanih + 1;
        }
      });

      this.users.forEach(elem => {
        let date3=new Date(elem.lastLog.toString());
        if (date3<=date2 && date3>=date1 && elem.type=="society"){
          this.brojUdruzenjaUlogovanih = this.brojUdruzenjaUlogovanih + 1;
        }
      });

      this.opcija="moze";
    }
  }




  dohvatiSveVesti(): void {
    this.service.dohvatiSveVesti().subscribe(data => {
      this.sveVesti = JSON.parse(JSON.stringify(data));
      this.popuniUsers();
    });
  }

  popuniUsers(): void {
    this.service.dohvatiSveKorisnike().subscribe(data => {
      this.users = JSON.parse(JSON.stringify(data));
      //this.ispisiKorisnike();
    });
  }

  dohvatiSveNotifikacije(): void {
    this.service.dohvatiSvaObavestenja().subscribe(data => {
      this.obavestenja = JSON.parse(JSON.stringify(data));
      //this.ispisiNotifikacije();
    });
  }


  izvezi1(): void{
    window.print();
  }

}
