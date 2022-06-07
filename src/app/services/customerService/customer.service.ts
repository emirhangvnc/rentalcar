import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Customer } from 'src/app/models/customer';

@Injectable({
    providedIn: 'root'
  })
  export class CustomerService {
    apiUrl ="https://localhost:44326/api/";
    constructor(private httpClient:HttpClient) { }
  
    getCustomer():Observable<ListResponseModel<Customer>>{
    let newFile=this.apiUrl+"customers/getAll";
    return this.httpClient.get<ListResponseModel<Customer>>(newFile);
     }
     getByCustomerId(customerId:number):Observable<ListResponseModel<Customer>>{
        let newFile=this.apiUrl+"models/getByCustomerId?customerId= "+customerId;
        return this.httpClient.get<ListResponseModel<Customer>>(newFile);
        }
  }