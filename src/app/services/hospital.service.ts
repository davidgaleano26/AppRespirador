import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from '../pages/hospital/hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  apiUrl = "http://localhost:8000/api"
  constructor(private http: HttpClient) { }
  
  getHospitals(): Observable<Hospital[]>{
    return this.http.get<Hospital[]>(`${this.apiUrl}/hospital`);
  }
}
