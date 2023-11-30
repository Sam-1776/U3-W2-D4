import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/service/posts.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss']
})
export class DettagliComponent implements OnInit {

  post: Post | undefined;
  i!: number;



  constructor(private postSrv: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(parm =>{
       this.i = +parm['id']
       console.log(this.i);
       this.post = this.postSrv.getInfo(this.i)
   })
  }



}
