import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styles: [],
})
export class ListUsersComponent implements OnInit {
  showSpinner = true;
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.showSpinner = false;
    });
  }

  deleteUser(user: User) {
    Swal.fire({
      title: '¿Está seguro de eliminar el usuario ' + user.name + '?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.userService
          .deleteUser(user)
          .then((_) => {
            Swal.fire({
              icon: 'success',
              title: 'Nice',
              text: 'Usuario eliminado correctamente',
            });
          })
          .catch((_) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Ocurrio un error al eliminar el usuario',
            });
          });
      }
    });
  }
}
