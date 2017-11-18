// Decorators
import { NgModule } from '@angular/core';

// Declarations
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ComisionDirectivaComponent } from './components/comision-directiva/comision-directiva.component';
import { ReglamentosComponent } from './components/reglamentos/reglamentos.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { ExposicionesComponent } from './components/exposiciones/exposiciones.component';
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';
import { JuecesComponent } from './components/jueces/jueces.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { CriaderosComponent } from './components/criaderos/criaderos.component';
import { SeleccionNacionalComponent } from './components/seleccion-nacional/seleccion-nacional.component';
import { HomeComponent } from './components/home/home.component';

// Imports
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { ContactoComponent } from './components/contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComisionDirectivaComponent,
    ReglamentosComponent,
    RankingsComponent,
    ExposicionesComponent,
    CertificacionesComponent,
    JuecesComponent,
    SponsorsComponent,
    CriaderosComponent,
    SeleccionNacionalComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
