import { Component } from "@angular/core";
import { uslugi } from './../../data/uslugi';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent {
    
    listaPostow = uslugi;


    
}