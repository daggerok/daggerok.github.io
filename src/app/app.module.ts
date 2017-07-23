import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//
import { AppRoutingModule } from './app-routing.module';
import { MaterializeModule } from 'angular2-materialize';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
//
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SoapUIRunnerHomeComponent } from './projects/soapui-runner-home/soapui-runner-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SoapUIRunnerHomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule,
    HighlightJsModule,
  ],
  providers: [
    HighlightJsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
