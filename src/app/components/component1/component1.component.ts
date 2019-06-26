import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service'
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
users;
  constructor(private commonService:CommonserviceService) { }
 ngOnInit() {
   this.commonService.getdata().subscribe((res)=>{
    this.users=res;
  });
   console.log(this.commonService)
   console.log(this.users)
  }
  selectUser(obj){
    console.log(obj)
   this.commonService.sendData(obj)
  }
}

