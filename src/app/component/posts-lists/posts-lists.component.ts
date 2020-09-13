import {Component, OnInit} from '@angular/core';
import {Post} from '../../model/post.model';
import {PostsService} from '../../service/posts.service';

@Component({
  selector: 'app-posts-lists',
  templateUrl: './posts-lists.component.html',
  styleUrls: ['./posts-lists.component.css']
})
export class PostsListsComponent implements OnInit {

  public posts: Post[] = [];

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.readPosts().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      });
  }

}
