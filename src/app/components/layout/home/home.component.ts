import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public logoutUsuario(): void {
    window.sessionStorage.clear();
    this.router.navigate(['/login'])
  }

}
