import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Model } from 'src/app/models/model';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
    providedIn: 'root'
  })
  export class ModelService {
    apiUrl ="https://localhost:44326/api/";
    constructor(private httpClient:HttpClient) { }
  
    getModels():Observable<ListResponseModel<Model>>{
     let newFile=this.apiUrl+"models/getall";
     return this.httpClient.get<ListResponseModel<Model>>(newFile);
     }
    getModelsByBrand(brandId:number):Observable<ListResponseModel<Model>>{
        let newFile=this.apiUrl+"models/getbybrand?brandId= "+brandId;
        return this.httpClient.get<ListResponseModel<Model>>(newFile);
        }
  }