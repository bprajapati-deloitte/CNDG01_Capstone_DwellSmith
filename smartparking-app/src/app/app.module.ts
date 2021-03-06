import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { IosInstallComponent } from './ios-install/ios-install.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CountryCodeSelectComponent } from './auth/country-code-select/country-code-select.component';
import { FilterPipe } from './auth/country-code-select/filter.pipe';
import { AuthService } from './auth/auth.service';
import { ConfirmCodeComponent } from './auth/confirm-code/confirm-code.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { LoaderComponent } from './loader/loader.component';
import { AvatarComponent } from './auth/profile/avatar/avatar.component';
import { GetdetailsComponent } from './parking/getdetails/getdetails.component';
import { DevicealertsComponent } from './alerts/devicealerts/devicealerts.component';
import { RegisterlocationComponent } from './parking/registerlocation/registerlocation.component';
import { ParkingComponent } from './parking/parking.component';
import { AlertsComponent } from './alerts/alerts.component';
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    SignInComponent,
    IosInstallComponent,
    SignUpComponent,
    CountryCodeSelectComponent,
    FilterPipe,
    ConfirmCodeComponent,
    ProfileComponent,
    LoaderComponent,
    AvatarComponent,
    GetdetailsComponent,
    DevicealertsComponent,
    RegisterlocationComponent,
    ParkingComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [ IosInstallComponent, CountryCodeSelectComponent, LoaderComponent ]
})
export class AppModule { }
