import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
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
import { CakesModule } from './module/cakes/cakes.module';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';
import * as Hammer from 'hammerjs';

@Injectable() 
export class MyHammerConfig extends HammerGestureConfig { 
  overrides = <any> { 
    swipe: { direction: Hammer.DIRECTION_ALL }, 
  }; 
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    PrimeCarouselComponent,
    CommingSoonComponent,
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
    LoginModule,
    CakesModule
  ],
  exports: [
    PrimeCarouselComponent
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true,
  },
  { 
    provide: HAMMER_GESTURE_CONFIG, 
    useClass: MyHammerConfig, 
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
