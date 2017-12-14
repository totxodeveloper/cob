import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  lat: number = -34.6120527;
  lng: number = -58.3873432;

  zoom: number = 16;

  constructor() { }

  ngOnInit() {
  }

}
