import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CustomerResponseModel } from 'src/app/models/customer/customerresponseModel';

@Injectable({
    providedIn: 'root'
  })
  export class CustomerService {
    apiUrl ="https://localhost:44326/api/";
    constructor(private httpClient:HttpClient) { }
  
    getCustomer():Observable<CustomerResponseModel>{
    let newFile=this.apiUrl+"customers/getAll";
    return this.httpClient.get<CustomerResponseModel>(newFile);
     }
     getByCustomerId(customerId:number):Observable<CustomerResponseModel>{
        let newFile=this.apiUrl+"models/getByCustomerId?customerId= "+customerId;
        return this.httpClient.get<CustomerResponseModel>(newFile);
        }
  }