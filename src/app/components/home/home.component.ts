import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private usuario:any;

  constructor(private servicioUsuario: UsuarioService) { }

  ngOnInit() {
    this.usuario = this.servicioUsuario.getUsuario();
  }

}