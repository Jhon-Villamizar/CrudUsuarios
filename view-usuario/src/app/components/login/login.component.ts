import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  principal = false;
  login = true;

  cambioEstado(mostrarP) {
    if (this.login === true) {
      console.log('hi =>', this.login);
      this.login = false;
      this.principal = true;
      console.log('login =>', this.login);
    }


  }
}
