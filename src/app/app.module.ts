import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IProduct } from './Iproduct';
import { Observable } from 'rxjs';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { StudentService } from './student.service';
import { ProductsDetailComponent } from './products-detail/products-detail.component';  
 import { ProductService } from './product.service';
@NgModule({
  declarations: [
    AppComponent,
    //StudentDetailsComponent,
    StudentMarksComponent,
    ProductsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StudentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
