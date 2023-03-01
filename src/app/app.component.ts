import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { SonarrService } from './sonarr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = ['Sonarr', 'Radarr', 'Settings'];
  activeLink = this.links[0];

  title = 'gatarr.angular';
}
