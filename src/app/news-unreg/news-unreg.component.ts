import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { News } from '../news.model';

@Component({
  selector: 'app-news-unreg',
  templateUrl: './news-unreg.component.html',
  styleUrls: ['./news-unreg.component.css']
})
export class NewsUnregComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
    this.dohvatiSveVesti();
  }
  
  news: News[]= [];


  dohvatiSveVesti():void{
    this.service.vestiJavne("svi").subscribe(data => {
      this.news = JSON.parse(JSON.stringify(data));
    });
  }
  

}
