import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { requestInterceptor } from './interceptor/request.interceptor';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    provideHttpClient(
      withInterceptors([requestInterceptor]),
  ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
