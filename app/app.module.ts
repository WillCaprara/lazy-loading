import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, PreloadingStrategy, Route, RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';


export const ROUTES: Routes = [
  { path: 'dashboard', canLoad: [AuthGuard], loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: '**', redirectTo: 'mail/folder/inbox' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MailModule,
    AuthModule,
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
