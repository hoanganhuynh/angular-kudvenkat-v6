import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  postData:any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      name:new FormControl(),
     
    });
  }

  onSubmit(): void{
    console.log(this.employeeForm.value);
    this.httpClient.post(`http://127.0.0.1:8000/api_new/portal_category/`,
    this.employeeForm.value).subscribe(
      (data:any) => {
      });

  }

}
