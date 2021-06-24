import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uri='http://localhost:4000'

  constructor(private http: HttpClient) { }

  login(username, password, type){
    const data = {
      username: username,
      password: password,
      type: type
    };
    return this.http.post(`${this.uri}/login`, data);
  }

  loginSociety(username, password){
    const data = {
      username: username,
      password: password
    };
    return this.http.post(`${this.uri}/loginSoc`, data);
  }

  register(newUser){
    const data = {
      newUser: newUser
    };
    return this.http.post(`${this.uri}/register`, data);
  }

  dohvatiSveVesti(){
    return this.http.get(`${this.uri}/vesti`);
  }

  dohvatiSvaPitanja(){
    return this.http.get(`${this.uri}/pitanja`);
  }

  dohvatiSvaObavestenja(){
    return this.http.get(`${this.uri}/obavestenja`);
  }

  dohvatiSveKorisnike(){
    return this.http.get(`${this.uri}/korisnici`);
  }

  dohvatiSveReklame(){
    return this.http.get(`${this.uri}/reklame`);
  }

  dohvatiSveGrupe(){
    return this.http.get(`${this.uri}/grupe`);
  }

  dohvatiSveSifrarnike(){
    return this.http.get(`${this.uri}/sifrarnici`);
  }

  promeniPoslednjeLogovanje(username,timeLog) {
    const data = {
      username: username,
      timeLog: timeLog
    };
    return this.http.post(`${this.uri}/vremeLogovanja`, data);
  }

  pitanjaPoKorisniku(username){
    const data = {
      username: username
    };
    return this.http.post(`${this.uri}/pitanjaZaKorisnika`, data);
  }

  
  vestiJavne(publicNews){
    const data = {
      publicNews: publicNews
    };
    return this.http.post(`${this.uri}/javneVesti`, data);
  }

  novaVest(vest){
    const data = {
      vest: vest
    };
    return this.http.post(`${this.uri}/novaVest`, data);
  }

  dodajNovuGrupu(grupa){
    const data = {
      grupa: grupa
    };
    return this.http.post(`${this.uri}/novaGrupa`, data);
  }

  dodajNoviSifrarnik(sifrarnik){
    const data = {
      sifrarnik: sifrarnik
    };
    return this.http.post(`${this.uri}/noviSifrarnik`, data);
  }

  novaReklama(reklama){
    const data = {
      reklama: reklama
    };
    return this.http.post(`${this.uri}/novaReklama`, data);
  }

  dodajNovoPitanje(pitanje){
    const data = {
      pitanje: pitanje
    };
    return this.http.post(`${this.uri}/novoPitanje`, data);
  }

  dodajNovoObavestenje(obavestenje){
    const data = {
      obavestenje: obavestenje
    };
    return this.http.post(`${this.uri}/novoObavestenje`, data);
  }


  promeniVidljivostVesti(title,visibility) {
    const data = {
      title: title,
      visibility: visibility
    };
    return this.http.post(`${this.uri}/promenaVidljivostiVesti`, data);
  }

  promeniKategorijuVesti(title,category) {
    const data = {
      title: title,
      category: category
    };
    return this.http.post(`${this.uri}/promenaKategorijuVesti`, data);
  }

  promeniOdgovorPitanja(naslov,odgovor) {
    const data = {
      naslov: naslov,
      odgovor: odgovor
    };
    return this.http.post(`${this.uri}/promenaOdgovorPitanja`, data);
  }


  obrisiDatogKorisnika(username) {
    const data = {
      username: username
    };
    return this.http.post(`${this.uri}/obrisiKorisnika`, data);
  }

  obrisiDatoUdruzenje(email) {
    const data = {
      email: email
    };
    return this.http.post(`${this.uri}/obrisiUdruzenje`, data);
  }

  obrisiSifrarnik(name) {
    const data = {
      name: name
    };
    return this.http.post(`${this.uri}/obrisiSifrarnik`, data);
  }

  obrisiVest(title) {
    const data = {
      title: title
    };
    return this.http.post(`${this.uri}/obrisiVest`, data);
  }

  newsByUser(username){
    const data = {
      username: username
    };
    return this.http.post(`${this.uri}/newsByUser`, data);
  }
}
