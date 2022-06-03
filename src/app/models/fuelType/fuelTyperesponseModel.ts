import { ResponseModel } from "../responseModel";
import { FuelType } from "./fuelType";

export interface FuelTypeResponseModel extends ResponseModel{
    data:FuelType[]
}