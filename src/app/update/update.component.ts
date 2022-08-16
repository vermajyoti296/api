import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  saveUsers: any
  userID: any;
  title: any;
  id: any;
  body: any;

  updatedata: FormGroup;

  constructor(private router: ActivatedRoute, private http: UserdataService, private toastrService: ToastrService) {
    this.updatedata = new FormGroup({
      userId: new FormControl(''),
      title: new FormControl(''),
      id: new FormControl(''),
      body: new FormControl('')
    })
    // let abc={
    // id:this.id,
    // userId:this.userID,
    // title:this.title,
    // body:this.body
    // }
    // patch(){
    // let abc={
    // id:this.id,
    // userId:this.userID,
    // title:this.title,
    // body:this.body
    // } 
    // console.warn(this.router.snapshot.params['id']);
  }
  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id']);
    this.http.users('posts/' + this.router.snapshot.params['id']).subscribe((result) => {
      console.warn(result);
      this.updatedata.patchValue(result);
    })
  }
  update() {
    // console.warn(this.abc.value)
    this.http.update('posts/', this.router.snapshot.params['id'], this.updatedata.value).subscribe((result) => {
      console.warn(result);
      this.toastrService.success('Update User Successfully');
    })
  }
}
