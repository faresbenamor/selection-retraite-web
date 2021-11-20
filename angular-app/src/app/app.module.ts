import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NbButtonModule, NbInputModule, NbThemeModule, NbWindowModule, NbWindowService} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import { LoginComponent } from './login/login.component';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { BreadcrambsComponent } from './breadcrambs/breadcrambs.component';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";

@NgModule({
    declarations: [
        AppComponent,
        MainLayoutComponent,
        LoginComponent,
        BreadcrambsComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgbModule,
        NbWindowModule.forRoot(),
        HttpClientModule,
        NbAuthModule.forRoot({
            strategies: [
                NbPasswordAuthStrategy.setup({
                    name: 'email',
                }),
            ],
            forms: {},
        }),
        NbInputModule,
        NbButtonModule,
      SweetAlert2Module.forRoot()
    ],
    providers: [
        // ...NbThemeModule.forRoot({name: 'corporate'}).providers,
        NbWindowService
    ],
    exports: [
        BreadcrambsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
