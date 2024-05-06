import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AccountDetailCardComponent } from './account-detail-card/account-detail-card.component';
import { UserProfileCardComponent } from './user-profile-card/user-profile-card.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    NotFoundComponent,
    AccountDetailCardComponent,
    UserProfileCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarComponent,
    HeaderComponent,
    NotFoundComponent,
    AccountDetailCardComponent,
    UserProfileCardComponent
  ]
})
export class SharedModule { }
