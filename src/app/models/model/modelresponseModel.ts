import { ResponseModel } from "../responseModel";
import { Model } from "./model";

export interface ModelResponseModel extends ResponseModel{
    data:Model[]
}