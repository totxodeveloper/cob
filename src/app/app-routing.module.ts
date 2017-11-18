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



const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'certificaciones', component: CertificacionesComponent },
  { path: 'comision-directiva', component: ComisionDirectivaComponent },
  { path: 'criaderos', component: CriaderosComponent },
  { path: 'exposiciones', component: ExposicionesComponent },
  { path: 'jueces', component: JuecesComponent },
  { path: 'rankings', component: RankingsComponent },
  { path: 'reglamentos', component: ReglamentosComponent },
  { path: 'seleccion-naciona', component: SeleccionNacionalComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
