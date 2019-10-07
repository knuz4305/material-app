import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { CapturaComponent } from './components/captura/captura.component';

const appRoutes: Routes = [
  {path: 'busqueda', component: BusquedaComponent},
  {path: 'captura', component: CapturaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BusquedaComponent,
    CapturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
