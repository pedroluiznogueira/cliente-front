import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css']
})
export class FaleConoscoComponent implements OnInit {

  title = 'EmailTemplate';
  dataset: Details = {
    name:'',
    age:null!,
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
  age:number;
  country:string;
  email:string;
}