import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Model } from 'src/app/models/model/model';
import { Observable } from 'rxjs';
import { ModelResponseModel } from 'src/app/models/model/modelresponseModel';

@Injectable({
    providedIn: 'root'
  })
  export class ModelService {
    apiUrl ="https://localhost:44326/api/";
    constructor(private httpClient:HttpClient) { }
  
    getModel():Observable<ModelResponseModel>{
     let newFile=this.apiUrl+"models/getall";
     return this.httpClient.get<ModelResponseModel>(newFile);
     }
    getByModelId(modelId:number):Observable<ModelResponseModel>{
        let newFile=this.apiUrl+"models/getbymodelid?modelid= "+modelId;
        return this.httpClient.get<ModelResponseModel>(newFile);
        }
    getModelDetails():Observable<ModelResponseModel>{
            let newFile=this.apiUrl+"models/getmodeldetails";
            return this.httpClient.get<ModelResponseModel>(newFile);
            }
  }