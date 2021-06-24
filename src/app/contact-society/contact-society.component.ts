import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-contact-society',
  templateUrl: './contact-society.component.html',
  styleUrls: ['./contact-society.component.css']
})
export class ContactSocietyComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
  }

  func(): void {
    localStorage.removeItem("ulogovan");
    this.router.navigate(['/logovanje']);
    
  }

}
