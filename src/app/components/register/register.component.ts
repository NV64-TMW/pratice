import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Register } from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnChanges {
  registerForm!: FormGroup;
  register: Register = { name: '', email: '', phone: null };

  @Input() name: string = 'naveen';

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    debugger;
    if (changes['name']) {
      this.registerForm.setValue(changes['name'].currentValue);
    }
  }

  ngOnInit(): void {
    this.myFormValues();
  }
  myFormValues() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }

  onSubmit() {
    this.register = this.registerForm.value;
  }
}
