import { PostService } from './../services/posts/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private postService: PostService) {

  }
  // Create Data
  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.postService.createPost(input)
    .subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
      console.log(response.json());
    });
  }

  updatePost(post) {
    this.postService.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      });
  }

  deletePost(post) {
  this.postService.deletePost(post.id)
    .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index , 1);
      })
  }

  ngOnInit() {
    // Get Data
    this.postService.getPosts()
      .subscribe(response => {
        this.posts = response.json();
      });
  }

}
