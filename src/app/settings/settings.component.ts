import { Component, OnInit } from '@angular/core';
import { ArrSettings } from '../settings-group/arr-settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public radarrSettings = new ArrSettings();
  public sonarrSettings = new ArrSettings();

  ngOnInit() {
    // load settings
  }

}
