import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {UsersService} from '../users.service';
import {User} from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username: String;
  password: String;
  message: String;

  constructor(private router: Router, private service: UsersService) {
    
   }

  ngOnInit() {
  }

  generisiDanasnjiDatum():String {
    let vreme=new Date();
    let vreme1= new Date();
    //if (vreme1 > vreme) alert("jebiga")

    //else{ alert("dobro je")}
    let s=""
    let s1 =""+vreme;
    s += vreme.getFullYear()+"/"
    let n=vreme.getMonth()+1
    
    s+="0" + n + "/" + s1[8]+s1[9];
    //alert(s);
    return s;
  }

  poslednjeLogovanjeUpdate():void {
    this.service.promeniPoslednjeLogovanje(this.username,this.generisiDanasnjiDatum()).subscribe(data=>{
    });
  }

  login():void{
    this.service.login(this.username, this.password,"hunter").subscribe((user: User)=>{
      if(user[0]){
        if(user[0].type=='hunter') {this.poslednjeLogovanjeUpdate(); localStorage.setItem("ulogovan", this.username.toString()); this.router.navigate(['/user']);}
      }
      else{
        this.service.login(this.username, this.password,"admin").subscribe((user: User)=>{
          if(user[0]){
            if(user[0].type=='admin') {this.poslednjeLogovanjeUpdate(); localStorage.setItem("ulogovan", this.username.toString()); this.router.navigate(['/admin']);}
          }
          else{
            this.service.loginSociety(this.username, this.password).subscribe((user: User)=>{
              if(user[0]){
                if(user[0].type=='society') {this.poslednjeLogovanjeUpdate(); localStorage.setItem("ulogovan", this.username.toString()); this.router.navigate(['/drustvo']);}
                else{
                  this.message = "Ne postoji korisnik";
                }
              }
              else{
                this.message = "Ne postoji korisnik";
              }
            });
          }
        });
      }
    });
  }
}

