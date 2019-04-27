import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { InvalidComponent } from './invalid/invalid.component';





const Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: '404', component: InvalidComponent
  },
  {
    path: ':id', component: ProfileComponent
  },
  {
    path: ':id/admin', component: AdminComponent
  },
  {
    path: '**', redirectTo: '/404'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    AdminComponent,
    InvalidComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
