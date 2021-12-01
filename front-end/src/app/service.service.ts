import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(public http:HttpClient) { }

  getfeedback(){
    return this.http.get("http://localhost:3000/testimonials");
  }
  
}
