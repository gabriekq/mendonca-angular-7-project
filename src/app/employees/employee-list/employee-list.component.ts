import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

   // empCodeaux : string;
   // fullnameaux : string;
   // mobileaux : string;
   // positionaux : string;

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    //console.log(this.service);
    this.service.refreshList();
  }

  populateForm(emp : Employee){
   // this.service.formData  = emp ;
   this.service.formData.EmployeeID= emp['employeeID'];
    this.service.formData.FullName = emp['fullName'];
    this.service.formData.Position = emp['position'];
    this.service.formData.EMPCode = emp['empcode'];
    this.service.formData.Mobile = emp['mobile'];

    // console.log(this.service.formData);
    //console.log(this.service.formData.EmployeeID);
  }

  deleteEmployee(emp : Employee){
    
    this.service.deleteEmployee(emp).subscribe(res => {
      this.service.refreshList();
  });
  }


}
