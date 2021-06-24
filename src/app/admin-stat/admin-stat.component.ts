import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { ChartType, ChartOptions } from 'chart.js';
import { Label, ThemeService } from 'ng2-charts';
import { User } from '../user.model';

@Component({
  selector: 'app-admin-stat',
  templateUrl: './admin-stat.component.html',
  styleUrls: ['./admin-stat.component.css'],
  providers: [ThemeService]
})
export class AdminStatComponent implements OnInit {

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
    this.popuniUsers();
    this.opcija = localStorage.getItem("statistika");
  }


  users: User[] = [];
  opcija: String =""



  /**********************************************Gimnastika sa dijagramima***************************************************/
   // Pie
   public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    }
  };
  public pieChartLabels1: Label[] = [];
  public pieChartData1: number[] = [];
  public pieChartLabels2: Label[] = [];
  public pieChartData2: number[] = [];
  public pieChartLabels3: Label[] = [];
  public pieChartData3: number[] = [];
  public pieChartLabels4: Label[] = [];
  public pieChartData4: number[] = [];
  public pieChartLabels5: Label[] = [];
  public pieChartData5: number[] = [];
  public pieChartLabels6: Label[] = [];
  public pieChartData6: number[] = [];
  public pieChartLabels7: Label[] = [];
  public pieChartData7: number[] = [];
  public pieChartLabels8: Label[] = [];
  public pieChartData8: number[] = [];
  public pieChartLabels9: Label[] = [];
  public pieChartData9: number[] = [];
  public pieChartLabels10: Label[] = [];
  public pieChartData10: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];





  /*Dovuci sve korisnike*/

  popuniUsers(): void {
    this.service.dohvatiSveKorisnike().subscribe(data => {
      this.users = JSON.parse(JSON.stringify(data));
      //this.ispisiKorisnike();
      this.popuniChartIme();
      this.popuniDataIme();
      this.popuniChartPrezime();
      this.popuniDataPrezime();
      this.popuniChartGrad();
      this.popuniDataGrad();
      this.popuniChartZemlja();
      this.popuniDataZemlja();
      this.popuniChartZivotinja();
      this.popuniDataZivotinja();
      this.popuniChartLovista();
      this.popuniDataLovista();
      this.popuniChartZemlja1();
      this.popuniDataZemlja1();
      this.popuniChartGrad1();
      this.popuniDataGrad1();
      this.popuniChartBrClanova();
      this.popuniDataBrClanova();
      this.popuniChartClanarina();
      this.popuniDataClanarina();
    });
  }


  /***********************************Gimnastika sa lovcima ***********************************************/
  

  /*Ime*/
  proveraPostojiIme(ime):boolean{
    let i=0
    this.pieChartLabels1.forEach(element => {
      if (element==ime){
        i=1
      }
    });
    if (i==1) {return false}
    else {return true;} 
  }

  izracunajBrojPojavljivanja(elem): number {
    let i =0;
    this.users.forEach(element => {
      if (element.name == elem && element.type=="hunter"){
        i=i+1;
      }
    });
    return i;
  } 


  popuniChartIme():void{
    this.users.forEach(element => {
      if (this.proveraPostojiIme(element.name) && element.type=="hunter"){
        this.pieChartLabels1.push(element.name.toString());
      }
    });
  }


  popuniDataIme():void{
    this.pieChartLabels1.forEach(elem => {
      this.pieChartData1.push(this.izracunajBrojPojavljivanja(elem));
    });
  }

  /*Prezime*/
  proveraPostojiPrezime(prezime):boolean{
    let i=0
    this.pieChartLabels2.forEach(element => {
      if (element==prezime){
        i=1
      }
    });
    if (i==1) {return false}
    else {return true;} 
  }

  izracunajBrojPojavljivanjaPrezimena(elem): number {
    let i =0;
    this.users.forEach(element => {
      if (element.surname == elem && element.type=="hunter"){
        i=i+1;
      }
    });
    return i;
  } 


  popuniChartPrezime():void{
    this.users.forEach(element => {
      if (this.proveraPostojiPrezime(element.surname) && element.type=="hunter"){
        this.pieChartLabels2.push(element.surname.toString());
      }
    });
  }


  popuniDataPrezime():void{
    this.pieChartLabels2.forEach(elem => {
      this.pieChartData2.push(this.izracunajBrojPojavljivanjaPrezimena(elem));
    });
  }

  /*Grad*/
  proveraPostojiGrad(grad):boolean{
    let i =0
    this.pieChartLabels3.forEach(element => {
      if (element==grad){
        i=1
      }
    });
    if (i==1) {return false}
    else {return true;} 
  }

  izracunajBrojPojavljivanjaGrada(elem): number {
    let i =0;
    this.users.forEach(element => {
      if (element.residence == elem && element.type=="hunter"){
        i=i+1;
      }
    });
    return i;
  } 


  popuniChartGrad():void{
    this.users.forEach(element => {
      if (this.proveraPostojiGrad(element.residence) && element.type=="hunter"){
        this.pieChartLabels3.push(element.residence.toString());
      }
    });
  }


  popuniDataGrad():void{
    this.pieChartLabels3.forEach(elem => {
      this.pieChartData3.push(this.izracunajBrojPojavljivanjaGrada(elem));
    });
  }
  
  /*Zemlja*/

  proveraPostojiZemlja(zemlja):boolean{
    let i=0;
    this.pieChartLabels4.forEach(element => {
      if (element == zemlja){i=1}        
    });
    if (i==1) {return false}
    else {return true;} 
  }

  izracunajBrojPojavljivanjaZemlja(elem): number {
    let i =0;
    this.users.forEach(element => {
      if (element.country == elem && element.type=="hunter"){
        i=i+1;
      }
    });
    return i;
  } 


  popuniChartZemlja():void{
    this.users.forEach(element => {
      if (element.type=="hunter" && this.proveraPostojiZemlja(element.country.toString())){
        this.pieChartLabels4.push(element.country.toString());
        //alert(element.country.toString())
      }
      else{
        //alert(element.name);
        //alert("Nisam");
      }
    });
  }


  popuniDataZemlja():void{
    this.pieChartLabels4.forEach(elem => {
      this.pieChartData4.push(this.izracunajBrojPojavljivanjaZemlja(elem));
    });
  }


  /*Zivotinje*/
  proveraPostojiZivotinja(zivotinja):boolean{
    let i=0
    this.pieChartLabels5.forEach(element => {
      if (element==zivotinja){
       i=1
      }
    });
    if (i==1) {return false}
    else {return true;} 
  }

  izracunajBrojPojavljivanjaZivotinja(elem): number {
    let i =0;
    this.users.forEach(element => {
      if (element.animals == elem && element.type=="hunter"){
        i=i+1;
      }
    });
    return i;
  } 


  popuniChartZivotinja():void{
    this.users.forEach(element => {
      if (this.proveraPostojiZivotinja(element.animals) && element.type=="hunter"){
        this.pieChartLabels5.push(element.animals.toString());
      }
    });
  }


  popuniDataZivotinja():void{
    this.pieChartLabels5.forEach(elem => {
      this.pieChartData5.push(this.izracunajBrojPojavljivanjaZivotinja(elem));
    });
  }

  /*Lovista*/
  proveraPostojiLoviste(loviste):boolean{
    let i=0;
    this.pieChartLabels6.forEach(element => {
      if (element==loviste){
        i=1;
      }
    });
    if (i==1) {return false}
    else {return true;} 
  }

  izracunajBrojPojavljivanjaLovista(elem): number {
    let i =0;
    this.users.forEach(element => {
      if (element.favHuntGround == elem && element.type=="hunter"){
        i=i+1;
      }
    });
    return i;
  } 


  popuniChartLovista():void{
    this.users.forEach(element => {
      if (this.proveraPostojiLoviste(element.favHuntGround) && element.type=="hunter"){
        this.pieChartLabels6.push(element.favHuntGround.toString());
      }
    });
  }


  popuniDataLovista():void{
    this.pieChartLabels6.forEach(elem => {
      this.pieChartData6.push(this.izracunajBrojPojavljivanjaLovista(elem));
    });
  }




  /***********************************Gimnastika sa udruzenjima ***********************************************/
  /*Grad*/
  proveraPostojiGrad1(grad):boolean{
    let i =0
    this.pieChartLabels7.forEach(element => {
      if (element==grad){
        i=1
      }
    });
    if (i==1) {return false}
    else {return true;} 
  }

  izracunajBrojPojavljivanjaGrada1(elem): number {
    let i =0;
    this.users.forEach(element => {
      if (element.residence == elem && element.type=="society"){
        i=i+1;
      }
    });
    return i;
  } 


  popuniChartGrad1():void{
    this.users.forEach(element => {
      if (this.proveraPostojiGrad1(element.residence) && element.type=="society"){
        this.pieChartLabels7.push(element.residence.toString());
      }
    });
  }


  popuniDataGrad1():void{
    this.pieChartLabels7.forEach(elem => {
      this.pieChartData7.push(this.izracunajBrojPojavljivanjaGrada1(elem));
    });
  }
  
  /*Zemlja*/

  proveraPostojiZemlja1(zemlja):boolean{
    let i=0;
    this.pieChartLabels8.forEach(element => {
      if (element == zemlja){i=1}        
    });
    if (i==1) {return false}
    else {return true;} 
  }

  izracunajBrojPojavljivanjaZemlja1(elem): number {
    let i =0;
    this.users.forEach(element => {
      if (element.country == elem && element.type=="society"){
        i=i+1;
      }
    });
    return i;
  } 


  popuniChartZemlja1():void{
    this.users.forEach(element => {
      if (element.type=="society" && this.proveraPostojiZemlja1(element.country.toString())){
        this.pieChartLabels8.push(element.country.toString());
        //alert(element.country.toString())
      }
      else{
        //alert(element.name);
        //alert("Nisam");
      }
    });
  }


  popuniDataZemlja1():void{
    this.pieChartLabels8.forEach(elem => {
      this.pieChartData8.push(this.izracunajBrojPojavljivanjaZemlja1(elem));
    });
  }

  /*Broj clanova*/

  proveraPostojiBrClanova(brClanova):boolean{
    let i=0;
    this.pieChartLabels9.forEach(element => {
      if (element == brClanova){i=1}        
    });
    if (i==1) {return false}
    else {return true;} 
  }

  izracunajBrojPojavljivanjaBrClanova(elem): number {
    let i =0;
    this.users.forEach(element => {
      if (element.numMembers == elem && element.type=="society"){
        i=i+1;
      }
    });
    return i;
  } 


  popuniChartBrClanova():void{
    this.users.forEach(element => {
      if (element.type=="society" && this.proveraPostojiBrClanova(element.numMembers.toString())){
        this.pieChartLabels9.push(element.numMembers.toString());
        //alert(element.country.toString())
      }
      else{
        //alert(element.name);
        //alert("Nisam");
      }
    });
  }


  popuniDataBrClanova():void{
    this.pieChartLabels9.forEach(elem => {
      this.pieChartData9.push(this.izracunajBrojPojavljivanjaBrClanova(elem));
    });
  }



  /*Broj clanova*/

  proveraPostojiClanarina(clanarina):boolean{
    let i=0;
    this.pieChartLabels10.forEach(element => {
      if (element == clanarina){i=1}        
    });
    if (i==1) {return false}
    else {return true;} 
  }

  izracunajBrojPojavljivanjaClanarina(elem): number {
    let i =0;
    this.users.forEach(element => {
      if (element.membership == elem && element.type=="society"){
        i=i+1;
      }
    });
    return i;
  } 


  popuniChartClanarina():void{
    this.users.forEach(element => {
      if (element.type=="society" && this.proveraPostojiClanarina(element.membership.toString())){
        this.pieChartLabels10.push(element.membership.toString());
        //alert(element.country.toString())
      }
      else{
        //alert(element.name);
        //alert("Nisam");
      }
    });
  }


  popuniDataClanarina():void{
    this.pieChartLabels10.forEach(elem => {
      this.pieChartData10.push(this.izracunajBrojPojavljivanjaClanarina(elem));
    });
  }













}
