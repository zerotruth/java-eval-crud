import { Component, OnInit } from '@angular/core';
import { Employee } from '../emloyee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {


  /** Variables */
  id : number;
  employee: Employee
  employees: Observable<Employee[]>;

  constructor(private route : ActivatedRoute, private router: Router,private employeeService: EmployeeService) { }

  ngOnInit(){

    this.employee=new Employee();

    /** Getting the id from the url */
    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployee(this.id).subscribe
    (data=>{
      console.log(data);
      this.employee=data;
    },
    error => console.log(error));
    

  }

  reloadData(){
    this.employees=this.employeeService.getEmployeesList();
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id,this.employee)
    .subscribe(data=>{
      console.log(data);
      this.reloadData();
    },
    error=>console.log(error));

    this.gotoList();
  }

  onSubmit(){this.updateEmployee();}

  gotoList(){
    this.router.navigate(['/employees']);
  }

}
