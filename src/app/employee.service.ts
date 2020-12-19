import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private baseUrl = 'http://localhost:8080/api/v1/employees';


  constructor(private http: HttpClient) { }

  /**Service Method to get Details of Single Employee */
  getEmployee(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  /**Service Method to post Data of Creating a New Employee */
  createEmployee(employee:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`, employee);
  }

  /**Service used to Update Details of an Employee */
  updateEmployee(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  /**Service used to delete an employee */
  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType: 'text'});
  }

  

  /**Service used to get all the list of Employees */
  getEmployeesList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
}
