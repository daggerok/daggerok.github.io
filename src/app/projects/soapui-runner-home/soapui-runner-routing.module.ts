import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoapUIRunnerHomeComponent } from './soapui-runner-home.component';

const runners: Routes = [
  {
    path: 'soapui',
    component: SoapUIRunnerHomeComponent,
  },
  {
    path: 'soapui/:id',
    component: SoapUIRunnerHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(runners)],
  exports: [RouterModule]
})
export class SoapUIRunnerRoutingModule { }
