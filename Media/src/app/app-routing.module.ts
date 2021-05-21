import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { AdminComponent } from './components/admin/admin.component';
import { ChatComponent } from './components/chat/chat.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { EditNewsComponent } from './components/edit-news/edit-news.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsSliderComponent } from './components/news-slider/news-slider.component';
import { RegisterComponent } from './components/register/register.component';
import { SportComponent } from './components/sport/sport.component';
import { WeatherComponent } from './components/weather/weather.component';
import { AdminGuardService } from './services/admin-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contactus',
    component: ContactUsComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sport',
    component: SportComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuardService],
    children: [
      {
        path: 'add-news',
        component: AddNewsComponent
      },
      {
        path: 'edit-news/:id',
        component: EditNewsComponent
      }, 
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '',
        component: NewsListComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
