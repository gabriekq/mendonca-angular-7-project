import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

formData: Employee;
list : Employee[];


readonly rootURL = "http://localhost:8080"
  constructor(private http: HttpClient) { }

postEmployee(formData : Employee){
 
 let param: Object = {
  "fullName":formData.FullName,
  "position": formData.Position,
  "mobile": formData.Mobile,
  "empcode": formData.EMPCode,
  "employeeID": formData.EmployeeID
 }
   
 
return this.http.post(this.rootURL+"/employee",param);
}

refreshList(){
  this.http.get(this.rootURL+"/employees")
  .toPromise().then(res => this.list = res as Employee[]);

}

putEmployee(formData : Employee){
  let param: Object = {
    "fullName":formData.FullName,
    "position": formData.Position,
    "mobile": formData.Mobile,
    "empcode": formData.EMPCode,
    "employeeID": formData.EmployeeID
   }

  return this.http.put(this.rootURL+"/employee",param);
}


deleteEmployee(formData : Employee){
   console.log(formData['employeeID']);
  return this.http.delete(this.rootURL+"/employee/"+formData['employeeID']);
}


}
