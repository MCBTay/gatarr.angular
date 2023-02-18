import { Component } from '@angular/core';
import { SonarrServiceService } from './sonarr-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gatarr.angular';

  constructor(private service: SonarrServiceService) {
    var test = this.service.getSeries().subscribe();
    console.log(test);
  }
}
