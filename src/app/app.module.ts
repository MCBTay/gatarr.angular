import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { SonarrModule } from "./sonarr/sonarr.module";
import { RadarrModule } from './radarr/radarr.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
    declarations: [		
        AppComponent
   ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        MatCardModule,
        MatTabsModule,
        
        SonarrModule,
        RadarrModule,
        SettingsModule
    ]
})
export class AppModule { }
