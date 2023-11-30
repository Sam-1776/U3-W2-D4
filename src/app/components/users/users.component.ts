import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/service/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user!: User[]

  constructor(private userSrv: UsersService) { }

  ngOnInit(): void {
    const user =  this.userSrv.recuperaUser();
        this.user = user;
  }

  info(){
    
  }

}
