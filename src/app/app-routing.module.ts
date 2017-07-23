import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SoapUIRunnerHomeComponent } from './projects/soapui-runner-home/soapui-runner-home.component';
import { SoapUIRunnerRoutingModule } from './projects/soapui-runner-home/soapui-runner-routing.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'soapui',
        component: SoapUIRunnerHomeComponent,
      },
      {
        path: '**',
        redirectTo: '/',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // use for dev only
    ),
    SoapUIRunnerRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
