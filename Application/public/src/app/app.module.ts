import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserService } from "./user.service";
import { MessageService } from "./message.service";
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: "", pathMatch: 'full', component: LoginComponent },
  {path: "dashboard/:id", component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
