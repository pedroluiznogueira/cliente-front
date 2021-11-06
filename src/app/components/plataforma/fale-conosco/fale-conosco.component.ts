import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css']
})
export class FaleConoscoComponent implements OnInit {

  title = 'EmailTemplate';
  dataset: Details = {
    name:'',
    age:'',
    country:'',
    email:'udeyouproject@gmail.com'
  };

  loading = false;

  color: ThemePalette = 'primary';

  constructor(
    private https: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    this.https.post<Details>('http://localhost:8080/email/fale-conosco', this.dataset, { headers: header }).subscribe(
        res => {
          this.dataset = res;
          this.dataset.age = '';
          this.dataset.name = '';
          this.dataset.country = '';
          this.dataset.email = '';
        });
  }

  load() {
    this.loading = !this.loading;
  }

  
}

interface Details{
  name:string;
  age:string;
  country:string;
  email:string;
}