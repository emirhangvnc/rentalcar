import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { BrandResponseModel } from 'src/app/models/brand/brandresponseModel';

@Injectable({
    providedIn: 'root'
  })
  export class BrandService {
    apiUrl ="https://localhost:44326/api/";
    constructor(private httpClient:HttpClient) { }
  
    getBrand():Observable<BrandResponseModel>{
     let newFile=this.apiUrl+"brands/getAll";
    return this.httpClient.get<BrandResponseModel>(newFile);
     }
     getByBrandId(brandId:number):Observable<BrandResponseModel>{
      let newFile=this.apiUrl+"brands/getByBrandId?brandIs= "+brandId;
      return this.httpClient.get<BrandResponseModel>(newFile);
      }
  }
  