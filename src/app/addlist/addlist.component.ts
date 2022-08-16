import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service'; 
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {

  saveUsers:any;
  userID:any;
  title:any;
   id:any;
   body:any;

  constructor(private http:UserdataService,private toastrService: ToastrService) { }

  submit(){
    var body={
      id:this.id,
      userId:this.userID,
      title:this.title,
      body:this.body
    }
    console.warn(body);
    this.http.saveUsers('posts',body).subscribe((result)=>{
      console.warn(result);
      this.toastrService.success('New User Added Successfully');
    })
  }

    ngOnInit(): void {
  }

}
