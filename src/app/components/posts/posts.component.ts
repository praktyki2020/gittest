import { Component } from "@angular/core";
import { postsData } from './../../data/posts';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent {
    
    listaPostow = postsData;


    
}