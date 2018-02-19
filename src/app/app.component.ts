import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
    <div class="app">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    app-root > ul {
      list-style-type: none;
    }
    .app {
      padding: 1%;
    }
  `],
})
export class AppComponent { }
