import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './Modules/product'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url : string ="http://localhost:3000/products";
  
  constructor(private http : HttpClient) { }

  getproduct():Observable<IProduct[]>{
    //alert("rania2");
    return this.http.get<IProduct[]>(this._url)
  }
  addNewProduct(obj){
    //alert("2");
    return this.http.post<IProduct>(this._url,obj)
  }
  editProductData(obj){
    return this.http.put<IProduct>(`${this._url}/${obj.id}`,obj)
  }
  getProductById(id):Observable<IProduct>{
    //alert("getProductById");
    //alert("id"+id)
    return this.http.get<IProduct>(`${this._url}/${id}`)
  }
  deleteProductByID(id){
    //alert("deleteProductByID");
    //alert("id"+id)
    return this.http.delete<IProduct>(`${this._url}/${id}`)  // delete
  }
}
