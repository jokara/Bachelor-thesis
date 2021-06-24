import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { UsersService } from './users.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HomeComponent } from './home/home.component';
import { NewsUnregComponent } from './news-unreg/news-unreg.component';
import { NotifUnregComponent } from './notif-unreg/notif-unreg.component';
import { ContactComponent } from './contact/contact.component';
import { SocietyComponent } from './society/society.component';
import { NotifHuntersComponent } from './notif-hunters/notif-hunters.component';
import { NotifSocietyComponent } from './notif-society/notif-society.component';
import { ContactHuntersComponent } from './contact-hunters/contact-hunters.component';
import { ContactSocietyComponent } from './contact-society/contact-society.component';
import { AdminNotifComponent } from './admin-notif/admin-notif.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminStatComponent } from './admin-stat/admin-stat.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { AdminRegComponent } from './admin-reg/admin-reg.component'; 
import { ChartsModule } from 'ng2-charts';
import { AdminCommercialComponent } from './admin-commercial/admin-commercial.component';
import { AdminCodebookComponent } from './admin-codebook/admin-codebook.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminQuestionsComponent } from './admin-questions/admin-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UserComponent,
    HomeComponent,
    NewsUnregComponent,
    NotifUnregComponent,
    ContactComponent,
    SocietyComponent,
    NotifHuntersComponent,
    NotifSocietyComponent,
    ContactHuntersComponent,
    ContactSocietyComponent,
    AdminNotifComponent,
    AdminNewsComponent,
    AdminStatComponent,
    AdminReportComponent,
    AdminRegComponent,
    AdminCommercialComponent,
    AdminCodebookComponent,
    AdminContactComponent,
    AdminQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbAlertModule,
    IvyCarouselModule,
    ChartsModule,
    BrowserAnimationsModule,
    AutocompleteLibModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
