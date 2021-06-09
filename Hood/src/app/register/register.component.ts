import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  input:any

  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {
    this.input={
      username: '', 
      email:'',
      password:'', 
      confirmpassword:''
    }
  }
  }
  // registerUser(){
  //   this.profileService.registerUser(this.input).subscribe(
  //     response =>{
  //       alert('User' + this.input.username + 'has been created') 
  //     },
  //     error => console.log('error', error)
  //   ) ;
  // }

