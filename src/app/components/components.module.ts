import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListUsersComponent } from './list-users/list-users.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    NavbarComponent,
    RegisterFormComponent,
    ListUsersComponent,
    SpinnerComponent,
  ],
  exports: [
    NavbarComponent,
    RegisterFormComponent,
    ListUsersComponent,
    SpinnerComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ComponentsModule {}
