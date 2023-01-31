import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styles: [],
})
export class RegisterFormComponent {
  registerForm: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(25)],
    ],
    lastname: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(25)],
    ],
    email: ['', [Validators.required, Validators.email]],
    website: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  isTheFieldInvalid(field: string) {
    return (
      this.registerForm.controls[field].errors &&
      this.registerForm.controls[field].dirty
    );
  }

  registerUser() {
    this.userService
      .addUser(this.registerForm.value)
      .then((_) => {
        this.registerForm.reset();

        Swal.fire({
          icon: 'success',
          title: 'Nice',
          text: 'Usuario creado correctamente',
        });
      })
      .catch((_) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ocurrio un error al crear el usuario',
        });
      });
  }
}
