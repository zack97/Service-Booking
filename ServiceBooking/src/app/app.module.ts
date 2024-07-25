import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './basic/components/login/login.component';
import { SignupComponent } from './basic/components/signup/signup.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout'; // Import NzLayoutModule
import { NzButtonModule } from 'ng-zorro-antd/button'; // Import other NgZorro Ant Design modules as needed
import { NzIconModule } from 'ng-zorro-antd/icon'; // Import NzIconModule if using icons

@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NzLayoutModule, // Ensure NzLayoutModule is imported
    NzButtonModule,
    NzIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
