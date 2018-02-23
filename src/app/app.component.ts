import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  liaisonClickHandler(event: any) {
    console.log('click');
  }

  liaisonSurvolHandler(survolMessage: string) {
    console.log(survolMessage);
  }
}
