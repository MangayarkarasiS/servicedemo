import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  public getProducts()
  {    
    return this.http.get('https://localhost:7293/api/Products');
  }

  public SaveProds(data:any)
  { 
    return this.http.post('https://localhost:7293/api/Products',data);
  }
  public DeleteProds(id:number)
  { 
    return this.http.delete('https://localhost:7293/api/Products/'+id);
  }
}
