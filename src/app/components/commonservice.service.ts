import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
communicate= new Subject()
data1;
  constructor(private _http:HttpClient) {
    console.log(this.communicate)
   }
   sendData(details){

     console.log(details)
     this.communicate.next(details)
   }
   getdata(){
    return this._http.get('http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true')
   }
}
  

