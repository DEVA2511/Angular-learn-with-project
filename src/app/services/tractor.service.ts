import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Tractor {
  id: number;
  driverName: string;
  phoneNumber: string;
  location: String;
  rent: DoubleRange;
  image:Blob;
}
@Injectable({
  providedIn: 'root'
})
export class TractorService {
  private apiUrl = 'http://localhost:8080/api/tractors'; 

  constructor(private http: HttpClient) { }
  getAllTractors(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  registerTractor(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, formData);
  }


  deleteTractor(id:number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`,);
  }

  updateTractor(id: number, updatedData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, updatedData);
  }
}
