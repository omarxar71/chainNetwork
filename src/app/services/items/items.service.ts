import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  
  private readonly _HttpClient=inject(HttpClient)

  constructor() { }
  getItemsItemsApi = ():Observable <any> =>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }
}
