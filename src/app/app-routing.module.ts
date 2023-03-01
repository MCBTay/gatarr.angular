import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadarrComponent } from './radarr/radarr.component';
import { SettingsComponent } from './settings/settings.component';
import { SonarrComponent } from './sonarr/sonarr.component';

const routes: Routes = [
  { path: 'sonarr', component: SonarrComponent },
  { path: 'radarr', component: RadarrComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
