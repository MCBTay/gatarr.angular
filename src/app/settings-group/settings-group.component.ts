import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArrSettings } from './arr-settings';

@Component({
  selector: 'app-settings-group',
  templateUrl: './settings-group.component.html',
  styleUrls: ['./settings-group.component.css'],
  inputs: ['settings']
})
export class SettingsGroupComponent implements OnInit {
  public settingsForm : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    public settings : ArrSettings) { 
    this.settingsForm = this.formBuilder.group({
      host: ['', [ Validators.required, Validators.pattern("(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)") ]],
      port: ['', [ Validators.required, Validators.pattern("^[0-9]*$") ]],
      isSecure: [false],
      apiKey: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  public onSubmit() {
    console.log("saving!");
    console.log(this.settingsForm.value);
  }
}
