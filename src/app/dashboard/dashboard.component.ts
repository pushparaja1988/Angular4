import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient , HttpParams, HttpHeaders} from '@angular/common/http';
import { Post } from '../post';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 name = '';
 readonly Root_Url = 'https://jsonplaceholder.typicode.com';
 posts : Observable <any>;
 getPosts : Observable <any>;
  constructor( private user: UserService , private http : HttpClient ) { 

  }

  ngOnInit() {
    this.name  = this.user.username;
  }
  
  getService()
  {
    let params = new HttpParams().set('id','10');
    let headers = new HttpHeaders().set('Authorization','auth-token');
    this.posts = this.http.get<Post[]>(this.Root_Url + '/posts',{ params, headers });
  }

  postService()
  {
    const data = {
      userId : 2,
      id : 2,
      title : 'vasanth',
      body : 'Hello Pushparaja...'
    }
    this.getPosts = this.http.post <Post[]>(this.Root_Url + '/posts',data);
    console.log(this.getPosts);
  }
}
