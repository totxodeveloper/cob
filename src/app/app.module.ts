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
import { RankingEstructuraComponent } from './components/rankings/ranking-estructura/ranking-estructura.component';
import { RankingTrabajoComponent } from './components/rankings/ranking-trabajo/ranking-trabajo.component';

import { AgmCoreModule } from '@agm/core';
import { PdfViewerModule } from "ng2-pdf-viewer";
import { BhComponent } from './components/certificaciones/bh/bh.component';
import { IpoComponent } from './components/certificaciones/ipo/ipo.component';
import { MondioringComponent } from './components/certificaciones/mondioring/mondioring.component';
import { FcaComponent } from './components/reglamentos/fca/fca.component';
import { SelectivosMundialesComponent } from './components/reglamentos/selectivos-mundiales/selectivos-mundiales.component';
import { TrabajoComponent } from './components/reglamentos/trabajo/trabajo.component';
import { RankingComponent } from './components/reglamentos/ranking/ranking.component';

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
    ContactoComponent,
    RankingEstructuraComponent,
    RankingTrabajoComponent,
    BhComponent,
    IpoComponent,
    MondioringComponent,
    FcaComponent,
    SelectivosMundialesComponent,
    TrabajoComponent,
    RankingComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_5zRAcqLlfjCRet-AGERhpy7WRFNoXKA'
    }),
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
