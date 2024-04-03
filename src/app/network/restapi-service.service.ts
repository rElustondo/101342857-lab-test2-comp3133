import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestapiServiceService {
  private BASE_URL = 'https://api.spacexdata.com/v3/launches';
  constructor(private httpClient: HttpClient) { }
  
  public getLaunches():Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}`);
  }
  public getLaunchesByYear(year: string):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}?launch_year=${year}`);
  }
  public getLaunchesByflightNumber(flight_number:number):Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}/${flight_number.toString()}`);
  }
}
