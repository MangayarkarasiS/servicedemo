import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service'; 
import {NgForm,FormsModule} from '@angular/forms';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.css'],
  providers:[StudentService]
})
export class StudentMarksComponent implements OnInit {
  public students = [] as any;  
  constructor(private studentService : StudentService) {   
     
  }  

  ngOnInit(): void {
     this.studentService.getProducts().subscribe(data =>
      { console.log(data);
        this.students= data});
  }
  savestuds(data:any)
  {
    console.log(data);
    this.studentService.SaveProds(data).subscribe(data=>this.students = data);
    
  }
  DeleteStuds(id:number) {
    this.studentService.DeleteProds(id)
      .subscribe(
        () => {
          console.log('Data deleted successfully');
        },
        (error) => {
          console.error('Error deleting data:', error);
        }
      );
  }
  /*DeleteStuds(id:number)
  {
    
    this.studentService.DeleteStuds(id).subscribe(res=>this.students=res);
    console.log(id);
  }
*/
}
