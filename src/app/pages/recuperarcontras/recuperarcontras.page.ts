import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recuperarcontras',
  templateUrl: './recuperarcontras.page.html',
  styleUrls: ['./recuperarcontras.page.scss'],
})
export class RecuperarcontrasPage implements OnInit {

  public email: string = "";

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }


  sendLinkReset(){

    if (this.email != "") {

      this.authService.resetPassword(this.email).then(() => {
        console.log('Enviado');
      }).catch(() => {
        console.log('Error');
      })

    } else {
      alert('Escribe el email, por favor');
    }
  }

}
