import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wishlist } from '../models/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private url: string = "https://udeyou-api.herokuapp.com";

  constructor(private http: HttpClient) { }
}
