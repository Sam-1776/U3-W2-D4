import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.scss']
})
export class UsersInfoComponent implements OnInit {
  @Input() user!: User;
  @Input() i!: number;

  constructor(private userSrv: UsersService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parm =>{
      this.i = parm['id']
      console.log(this.i);
      this.user = this.userSrv.getInfo(this.i)
  })
  }

}
