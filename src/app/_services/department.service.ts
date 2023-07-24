import { Injectable } from '@angular/core';
import { Department } from '../_models/department';
import { HttpClient } from '@angular/common/http';
import { DepartmentDB } from '../_models/department-db';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departmets: Department[] = [
    new Department(10, "SD", 50),
    new Department(20, ".NET", 60),
    new Department(30, "Os", 70),
    new Department(40, "El", 80),
  ];

  baseUrl= "https://localhost:7196/api/department/";
  getAll() {
    return this.http.get<DepartmentDB[]>(this.baseUrl);
    // return this.departmets;
  };
  getById(id: number) {
    return this.http.get<DepartmentDB>(this.baseUrl+id);
    // for (let i = 0; i < this.departmets.length; i++) {
    //   if (this.departmets[i].deptid == id)
    //     return this.departmets[i];
    // }
    // return null;
  };
  add(dept:DepartmentDB){
    return this.http.post<DepartmentDB>(this.baseUrl,dept);
    // this.departmets.push(new Department(dept.deptid, dept.deptname, dept.capcity));
  }
  delete(id:number|undefined){
    return this.http.delete(this.baseUrl+id);
  }
  constructor(public http:HttpClient) {}
}
