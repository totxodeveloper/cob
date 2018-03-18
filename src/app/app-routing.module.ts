import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

// Components
import { HomeComponent } from "./components/home/home.component";
import { CertificacionesComponent } from "./components/certificaciones/certificaciones.component";
import { ComisionDirectivaComponent } from "./components/comision-directiva/comision-directiva.component";
import { CriaderosComponent } from "./components/criaderos/criaderos.component";
import { ExposicionesComponent } from "./components/exposiciones/exposiciones.component";
import { JuecesComponent } from "./components/jueces/jueces.component";
import { RankingsComponent } from "./components/rankings/rankings.component";
import { ReglamentosComponent } from "./components/reglamentos/reglamentos.component";
import { SeleccionNacionalComponent } from "./components/seleccion-nacional/seleccion-nacional.component";
import { SponsorsComponent } from "./components/sponsors/sponsors.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { BhComponent } from "./components/certificaciones/bh/bh.component";
import { IpoComponent } from "./components/certificaciones/ipo/ipo.component";
import { MondioringComponent } from "./components/certificaciones/mondioring/mondioring.component";
import { FigurantesComponent } from "app/components/figurantes/figurantes.component";



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'certificaciones', component: CertificacionesComponent },
  { path: 'comision-directiva', component: ComisionDirectivaComponent },
  { path: 'afijos', component: CriaderosComponent },
  { path: 'exposiciones', component: ExposicionesComponent },
  { path: 'jueces', component: JuecesComponent },
  { path: 'rankings', component: RankingsComponent },
  { path: 'reglamentos', component: ReglamentosComponent },
  { path: 'seleccion-naciona', component: SeleccionNacionalComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'bh', component: BhComponent },
  { path: 'ipo', component: IpoComponent },
  { path: 'mondioring', component: MondioringComponent },
  { path: 'figurantes', component: FigurantesComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
