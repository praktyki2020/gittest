import { Component } from "@angular/core";

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  
    submit(form) : void {
        console.log(form.value);
       }

}