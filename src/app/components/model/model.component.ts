import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/models/model';
import { ActivatedRoute } from '@angular/router';
import { ModelService } from 'src/app/services/modelService/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  models:Model[]=[];
  dataLoaded=false;
  constructor(private modelService:ModelService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getModelsByBrand(params["brandId"])
      }else{
        this.getModels()
    }
    })
  }
  getModels() {
   this.modelService.getModels().subscribe(response=>{
       this.models = response.data
        this.dataLoaded = true;
    })   
 }
 getModelsByBrand(brandId:number) {
  this.modelService.getModelsByBrand(brandId).subscribe(response=>{
    this.models = response.data
    this.dataLoaded = true;
  })   
 }
}