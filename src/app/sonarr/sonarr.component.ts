import { Component, OnInit } from '@angular/core';
import { SonarrService, Series } from '../sonarr.service';

@Component({
  selector: 'app-sonarr',
  templateUrl: './sonarr.component.html',
  styleUrls: ['./sonarr.component.css']
})
export class SonarrComponent implements OnInit {
  public SeriesList: Series[] | undefined;
  constructor(private service : SonarrService) { }

  ngOnInit() {
    this.service.initializeFromLocalStorage();

    this.service.getSeries()
      .subscribe((data: Series[]) => this.SeriesList = { ...data });
  }
}