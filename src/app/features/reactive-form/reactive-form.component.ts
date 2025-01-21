import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      agree: [false, Validators.requiredTrue],
      gender: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    }
  }

  isInvalid(controlName: string): boolean | undefined {
    const control = this.form.get(controlName);
    return control?.invalid && control?.touched;
  }

  getError(controlName: string): string {
    const control = this.form.get(controlName);
    if (control?.errors?.required) return `${controlName} is required`;
    if (control?.errors?.minlength)
      return `${controlName} must be at least ${control.errors.minlength.requiredLength} characters`;
    if (control?.errors?.email) return `Invalid email address`;
    if (control?.errors?.min) return `Minimum age is ${control.errors.min.min}`;
    if (control?.errors?.max) return `Maximum age is ${control.errors.max.max}`;
    return '';
  }
}
