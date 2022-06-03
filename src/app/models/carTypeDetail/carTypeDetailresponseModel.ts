import { ResponseModel } from "../responseModel";
import { CarTypeDetail } from "./carTypeDetail";

export interface CarTypeDetailResponseModel extends ResponseModel{
    data:CarTypeDetail[]
}