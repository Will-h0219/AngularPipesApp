import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = "william";
  nombreUpper: string = "WILLIAM";
  nombreCompleto: string = 'wIlLiAm heRrErA';

  fecha: Date = new Date();

}
