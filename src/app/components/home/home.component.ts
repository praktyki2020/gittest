import { Component } from "@angular/core";

import { uslugi } from '/Users/dread/Desktop/praktykigit/gittest/src/app/uslugi';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    products = uslugi;
    
}