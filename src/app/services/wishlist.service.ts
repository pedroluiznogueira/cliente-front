import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wishlist } from '../models/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private url: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  addWish(wishlist: Wishlist){
    console.log(wishlist)
    this.http.post(`${this.url}/wishlist/create`, wishlist).subscribe();
  }
}
