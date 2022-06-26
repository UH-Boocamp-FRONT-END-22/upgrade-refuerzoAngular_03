import { IDbz } from './../interfaces/dbz';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent {

  @Input() personajes: IDbz[] = [];

}
