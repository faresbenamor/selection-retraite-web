import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NbThemeModule,  NbWindowModule, NbWindowService} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {MainLayoutComponent} from './main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbWindowModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    // ...NbThemeModule.forRoot({name: 'corporate'}).providers,
    NbWindowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
