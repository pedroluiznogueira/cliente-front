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

    console.log("fjksdfks")
    this.https.post<Details>('http://localhost:8080/testapp/getdetails', this.dataset, { headers: header }).subscribe(
        res => {
          this.dataset = res;
          console.log(this.dataset);
          alert('Email Sent successfully');
          this.dataset.age = null!;
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