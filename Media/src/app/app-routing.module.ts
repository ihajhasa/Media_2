import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
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

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
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
    path: 'add-news',
    component: AddNewsComponent
  },
  {
    path: 'edit-news/:id',
    component: EditNewsComponent
  }, 
  {
    path: 'chat',
    component: ChatComponent
  }, 
  {
    path: 'footer',
    component: FooterComponent
  }, 
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'news-slider',
    component: NewsSliderComponent
  },
  {
    path: 'news-list',
    component: NewsListComponent
  },
  {
    path: 'sport',
    component: SportComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
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
