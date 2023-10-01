import { Component, OnInit } from '@angular/core';
import {NgForm,FormsModule} from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css'],
  providers:[ProductService]
})
export class ProductsDetailComponent implements OnInit {
  public products = [] as any;  
  constructor(private productService : ProductService) { }

  ngOnInit(): void {

    
    this.productService.getProducts().subscribe(data =>
      { console.log(data);
        this.products = data});
  }
  saveProds(data:any)
  {
    console.log(data);
    this.productService.SaveProds(data).subscribe(data=>this.products = data);
  }
  /*DeleteProds(id:number) {
    this.productService.DeleteProds(id)
      .subscribe(
        () => {
          console.log('Data deleted successfully');
        },
        (error) => {
          console.error('Error deleting data:', error);
        }
      );
  }*/
}
  /*DeleteStuds(id:number)
  {
    
    this.studentService.DeleteStuds(id).subscribe(res=>this.students=res);
    console.log(id);
  }
}


*/