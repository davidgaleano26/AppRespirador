import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from '../pages/hospitals/hospitals.model';
import { DataInformation } from '../pages/data/data.model'

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  
  apiUrl = "https://api-respirador-wb7ch.ondigitalocean.app/api"
  constructor(private http: HttpClient) { }
  
  getHospitals(): Observable<Hospital[]>{
    return this.http.get<Hospital[]>(`${this.apiUrl}/hospital`);
  }
  addHospital(hospital: Hospital):Observable<Hospital>{
    return this.http.post<Hospital>(`${this.apiUrl}/hospital`,hospital)
  }
  addData(dataInformation: DataInformation):Observable<DataInformation>{
    return this.http.post<DataInformation>(`${this.apiUrl}/data`, dataInformation)
  }
}
