import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
  }


  func(): void {
    localStorage.removeItem("ulogovan");
    this.router.navigate(['/logovanje']);
    
  }

}
