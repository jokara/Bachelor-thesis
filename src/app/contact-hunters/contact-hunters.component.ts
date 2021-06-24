import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-contact-hunters',
  templateUrl: './contact-hunters.component.html',
  styleUrls: ['./contact-hunters.component.css']
})
export class ContactHuntersComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
  }

  func(): void {
    localStorage.removeItem("ulogovan");
    this.router.navigate(['/logovanje']);
    
  }
}
