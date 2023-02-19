import { Component } from '@angular/core';
import { SonarrService } from './sonarr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gatarr.angular';

  constructor(private service: SonarrService) {
    var test = this.service.getSeries().subscribe();
    console.log(test);
  }
}
