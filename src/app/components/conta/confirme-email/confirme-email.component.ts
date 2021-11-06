import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirme-email',
  templateUrl: './confirme-email.component.html',
  styleUrls: ['./confirme-email.component.css']
})
export class ConfirmeEmailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

}
