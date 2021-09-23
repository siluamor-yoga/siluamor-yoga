import { RouterModule, Routes } from '@angular/router';
import { InquilinoService } from './shared/service/inquilino.service';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { InquilinosComponent } from './inquilinos/inquilinos.component';
import { FormComponent } from './inquilinos/form/form.component';
import { DepartamentoComponent } from './departamentos/departamento/departamento.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-AR';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EdificiosComponent } from './edificios/edificios.component';
import { DepartamentoCardComponent } from './departamentos/departamento-card/departamento-card.component';
import { EdificioCardComponent } from './edificios/edificio-card/edificio-card.component';

registerLocaleData(localeEs, 'es-AR');

const routes: Routes = [
  { path: '', redirectTo: '/inquilinos', pathMatch: 'full' },
  { path: 'inquilinos', component: InquilinosComponent },
  { path: 'inquilinos/form', component: FormComponent },
  { path: 'inquilinos/form/:id', component: FormComponent },
  { path: 'departamentos', component: DepartamentosComponent },
  { path: 'departamento/:id', component: DepartamentoComponent },
  { path: 'edificios', component: EdificiosComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InquilinosComponent,
    FormComponent,
    DepartamentosComponent,
    DepartamentoComponent,
    EdificiosComponent,
    DepartamentoCardComponent,
    EdificioCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatRippleModule,
    MatIconModule
  ],
  providers: [InquilinoService, { provide: LOCALE_ID, useValue: 'es-AR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
