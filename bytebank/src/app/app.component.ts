import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // É O MESMO UTILIZADO NA INDEX.HTML
  
  // ARQUIVO HTML QUE CONTEM TODO CÓDIGO PARA MONTAR A PÁGINA INDEX
  //PROCULÁ-LO
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
}
