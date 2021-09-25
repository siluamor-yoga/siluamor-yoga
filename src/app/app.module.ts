import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { PresentationComponent } from './component/home/presentation/presentation.component';
import { ActivitiesComponent } from './component/home/activities/activities.component';
import { MenuComponent } from './component/base/menu/menu.component';
import { FooterComponent } from './component/base/footer/footer.component';

//AngularMaterial
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProfileComponent } from './component/home/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    ActivitiesComponent,
    MenuComponent,
    FooterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }