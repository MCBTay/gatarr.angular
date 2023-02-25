import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsGroupComponent } from '../settings-group/settings-group.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { ArrSettings } from '../settings-group/arr-settings';

@NgModule({
    exports: [SettingsComponent],
    declarations: [SettingsComponent, SettingsGroupComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatCheckboxModule,
        MatButtonModule,
        MatGridListModule
    ],
    providers: [
      ArrSettings
    ]
})
export class SettingsModule { }
