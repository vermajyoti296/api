import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users:any;
  constructor(private http:UserdataService) { 
    this.getdata();
  }
  getdata(){
    this.http.users('posts').subscribe((data)=>{
      console.log(data);
      this.users=data;
    });
  }
  remove(id:any){
    this.http.delete('posts/',id).subscribe((data)=>{
     console.warn(data);
    })

 }

  ngOnInit(): void { }

}
