import { Component, Input } from '@angular/core';
// tslint:disable-next-line:quotemark
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  validatingForm: FormGroup;


  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.validatingForm = new FormGroup({
      modalFormElegantEmail: new FormControl('', Validators.email),
      modalFormElegantPassword: new FormControl('', Validators.required)
    });
  }

  get modalFormElegantEmail() {
    return this.validatingForm.get('modalFormElegantEmail');
  }

  get modalFormElegantPassword() {
    return this.validatingForm.get('modalFormElegantPassword');
  }
}
