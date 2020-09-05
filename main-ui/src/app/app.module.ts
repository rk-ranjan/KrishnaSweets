import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCommonModule, MatOptionModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PrimeCarouselComponent } from './components/prime-carousel/prime-carousel.component';
import {CarouselModule} from 'primeng/carousel'; 
import { ButtonModule } from 'primeng/button';
import { HttpInterceptorService } from './core/services/http-interceptor.service';
import { LoginModule } from './module/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    PrimeCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCommonModule,
    MatOptionModule,
    MatRadioModule,
    CarouselModule,
    ButtonModule,
    LoginModule
  ],
  exports: [
    PrimeCarouselComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
