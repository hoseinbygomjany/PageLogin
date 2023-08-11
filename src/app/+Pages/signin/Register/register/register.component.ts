import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nameFormControl = new FormControl('', [Validators.required]);
  phoneFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
}
