import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FacebookModule} from "ngx-facebook";
import { FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";
import {HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './components/startpage/login/login.component';
import { SignUp } from './components/startpage/registration/signup.component';
import { StartComponent } from './components/startpage/startpage.component';
import { MyModal } from './components/startpage/modal/modal.component';
import { HomeComponent         } from './home.component';
import {AppRoutingModule} from "./app-routing.module";
import { AppComponent }       from './app.component';

import { AppConfig } from './app-config';
import { AuthGuard        } from './services/auth_guard.service';
import { UserInfoService  } from './services/user-info.service';
import { LoginService     } from './services/api/login.service';
import { ApiRequestService} from './services/api/api-request.service';
import { LiveQuotesService} from './services/api/livequotes.service';

import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {History} from "./components/history/history.component";
import {LiveQuotes} from "./components/livequotes/livequotes.component";
import { LogoutComponent } from './components/startpage/logout/logout.component';
import {Carousel} from './components/startpage/carousel/carousel.component';

import {LiveQuotesStartPage} from './components/startpage/livequotes/livequotes.component';
import {BsModalService, ComponentLoaderFactory, PositioningService} from "ngx-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartComponent,
    HomeComponent,
    DashboardComponent,
    LiveQuotes,
    History,
    LogoutComponent,
    Carousel,
    LiveQuotesStartPage,
    MyModal,
    SignUp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    FacebookModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    AppConfig,
    AuthGuard,
    UserInfoService,
    LoginService,
    ApiRequestService,
    BsModalService,
    ComponentLoaderFactory,
    PositioningService,
    LiveQuotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
