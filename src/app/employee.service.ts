import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private urlBase ='/api/v1/employees';
  constructor(private httpClient: HttpClient) { }

getEmployeeList():Observable<Employee[]>{
  return this.httpClient.get<Employee[]>(`${this.urlBase}`)
}

createEmployee(employee: Employee):Observable<Object>{
  return this.httpClient.post(`${this.urlBase}`,employee)

}

}
