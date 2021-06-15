import { Component, OnInit } from '@angular/core';

import {Employee  } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  employees: Employee[] | undefined;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    /*this.employees = [{
      "id":1,
      "firstName":"Pedro",
      "lastName":"Rojas",
      "emailId":"pedro@gmail.com"
    },
    {
      "id":2,
      "firstName":"Thomas",
      "lastName":"Rojas",
      "emailId":"Thomas@gmail.com"
    }]
  */
  this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data =>{
      this.employees=data;
    })
  }
}
