import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArrSettings } from './arr-settings';

@Component({
  selector: 'app-settings-group',
  templateUrl: './settings-group.component.html',
  styleUrls: ['./settings-group.component.css'],
  inputs: ['name']
})
export class SettingsGroupComponent implements OnInit {
  public settingsForm : FormGroup;
  public name : string = "";

  constructor(private formBuilder : FormBuilder) { 
    this.settingsForm = this.formBuilder.group({
      host: ['', [ Validators.required, Validators.pattern("(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)") ]],
      port: ['', [ Validators.required, Validators.pattern("^[0-9]*$") ]],
      isSecure: [false],
      apiKey: ['', Validators.required]
    });
  }

  ngOnInit() {
    var localStorageSettings = localStorage.getItem(this.name);
    if (localStorageSettings == null) return;

    let settings : ArrSettings = JSON.parse(localStorageSettings);

    this.settingsForm.setValue([ "host", settings.host ]);
    this.settingsForm.setValue([ "port", settings.port ]);
    this.settingsForm.setValue([ "isSecure", settings.isSecure ]);
    this.settingsForm.setValue([ "apiKey", settings.apiKey ]);
  }

  public onSubmit() {
    if (this.settingsForm.pristine) return;

    localStorage.setItem(this.name, JSON.stringify(this.settingsForm.value));
  }
}
