import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NewsUnregComponent } from './news-unreg/news-unreg.component';
import { NotifUnregComponent } from './notif-unreg/notif-unreg.component';
import { ContactComponent } from './contact/contact.component';
import { SocietyComponent } from './society/society.component';
import { NotifHuntersComponent } from './notif-hunters/notif-hunters.component';
import { ContactHuntersComponent } from './contact-hunters/contact-hunters.component';
import { NotifSocietyComponent } from './notif-society/notif-society.component';
import { ContactSocietyComponent } from './contact-society/contact-society.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminNotifComponent } from './admin-notif/admin-notif.component';
import { AdminStatComponent } from './admin-stat/admin-stat.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { AdminRegComponent } from './admin-reg/admin-reg.component';
import { AdminCommercialComponent } from './admin-commercial/admin-commercial.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminCodebookComponent } from './admin-codebook/admin-codebook.component';
import { AdminQuestionsComponent } from './admin-questions/admin-questions.component';

const routes: Routes = [
  {path: 'logovanje', component: LoginComponent},
  {path: 'registracija', component: RegisterComponent},
  {path: 'user', component: UserComponent},
  {path: 'admin', component: AdminComponent},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'vesti_neregistrovani', component: NewsUnregComponent},
  {path: 'obavestenja_neregistrovani', component: NotifUnregComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: 'drustvo', component: SocietyComponent},
  {path: 'obavestenja_lovac', component: NotifHuntersComponent},
  {path: 'kontakt_lovac', component: ContactHuntersComponent},
  {path: 'obavestenja_udruzenje', component: NotifSocietyComponent},
  {path: 'admin_vesti', component: AdminNewsComponent},
  {path: 'admin_obavestenja', component: AdminNotifComponent},
  {path: 'admin_statistika', component: AdminStatComponent},
  {path: 'admin_izvestaj', component: AdminReportComponent},
  {path: 'admin_azuriranje', component: AdminRegComponent},
  {path: 'admin_reklama', component: AdminCommercialComponent},
  {path: 'kontakt_admin', component: AdminContactComponent},
  {path: 'admin_sifrarnik', component: AdminCodebookComponent},
  {path: 'admin_odgovori', component: AdminQuestionsComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
