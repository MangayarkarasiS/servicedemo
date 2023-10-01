import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './Iproduct';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 ////assets/AppData/students.json
  //private url : string ='https://localhost:7048/api/studs';

  constructor(private http: HttpClient) { 
    console.log("Hello from service")
   }
 
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
  public GetBranches(string cityname)
  {
    return this.http.get('https:/njsfjsdn');
  } 
}



/* public UpdateProds(id:number,data:any)
  {  
    return this.http.delete('https://localhost:7276/api/Emps/'+id,data);
  }*/
/* getStudents() : Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }*/