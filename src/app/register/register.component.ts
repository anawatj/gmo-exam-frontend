import { Component, OnInit } from '@angular/core';
import { RergisterModel } from 'src/models/register.model';
import { UserService } from 'src/services/user.service';
import { UserGroupService } from 'src/services/usergroup.service';
import {UserGroupModel} from '../../models/usergroup.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userGroupService:UserGroupService,private userService:UserService) { }

  userGroups:UserGroupModel[]=[];
  register:RergisterModel={
    userName:"",
    userGroupId:""  
  }


  ngOnInit(): void {
    this.getUserGroups();
  }

  getUserGroups(){
    this.userGroupService.GetUserGroup().subscribe(resp=>{
      this.userGroups = resp.data;
    });
  
  }
  save():void{
 
    this.userService.register(this.register).subscribe(resp=>{
      window.location.href="/landing";
    });
  }
  clear():void{

  }

}
