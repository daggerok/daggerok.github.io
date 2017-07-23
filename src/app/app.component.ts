import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button class="waves-effect waves-light btn" routerLinkActive="active" routerLink="'/'">'/'</button>
    <button class="waves-effect waves-light btn" routerLinkActive="active" [routerLink]="'/soapui'">'/soapui'</button>
    <button class="waves-effect waves-light btn" routerLinkActive="active" [routerLink]="['soapui', 'runner']">['soapui', 'runner']</button>
    <button class="waves-effect waves-light btn" routerLinkActive="active" [routerLink]="['soapui', 'testrunner']">['soapui', 'testrunner']</button>
    <button class="waves-effect waves-light btn" routerLinkActive="active" [routerLink]="['soapui', 'loadtestrunner']">['soapui', 'loadtestrunner']</button>
    <button class="waves-effect waves-light btn" routerLinkActive="active" routerLink="/whatever">/whatever</button>
    <router-outlet></router-outlet>
  `,
  styles: [`
    app-root > ul {
      list-style-type: none;
    }
  `],
})
export class AppComponent { }
