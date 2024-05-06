import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthHomeComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
