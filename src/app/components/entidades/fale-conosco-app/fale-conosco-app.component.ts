import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fale-conosco-app',
  templateUrl: './fale-conosco-app.component.html',
  styleUrls: ['./fale-conosco-app.component.css']
})
export class FaleConoscoAppComponent implements OnInit {

  title = 'EmailTemplate';
  dataset: Details = {
    name:'',
    age:'',
    country:'',
    email:'udeyouproject@gmail.com'
  };

  constructor(
    private https: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    console.log("CHEGOU")
    this.https.post<Details>('http://localhost:8080/email/fale-conosco', this.dataset, { headers: header }).subscribe(
      res => {
        this.dataset = res;
        this.dataset.age = '';
        this.dataset.name = '';
        this.dataset.country = '';
        this.dataset.email = '';
      });
  }

  
}

interface Details{
  name:string;
  age:string;
  country:string;
  email:string;
}