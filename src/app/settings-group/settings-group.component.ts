import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArrSettings } from './arr-settings';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings-group',
  templateUrl: './settings-group.component.html',
  styleUrls: ['./settings-group.component.css'],
  inputs: ['settings']
})
export class SettingsGroupComponent implements OnInit {
  public settingsForm : FormGroup;

  constructor(public settings : ArrSettings) { 
    this.settingsForm = new FormGroup({
      host: new FormControl(''),
      port: new FormControl(''),
      isSecure: new FormControl(false),
      apiKey: new FormControl('')
    });
  }

  ngOnInit() {
  }

  public onSubmit() {
    console.log("saving!");
    console.log(this.settingsForm.value);
  }
}
