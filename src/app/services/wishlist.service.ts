import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wishlist } from '../models/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private url: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  addWish(wishlist: Wishlist){
    let header: HttpHeaders = new HttpHeaders({
      'Authorization': sessionStorage.getItem('token')!
    });

    this.http.post(`${this.url}/wishlist/create`, wishlist, { headers: header}).subscribe();
  }

  public criarWishList(): void {
    let token = window.sessionStorage.getItem("tokenAux");
  }
}
