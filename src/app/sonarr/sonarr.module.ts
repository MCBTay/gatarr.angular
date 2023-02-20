import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SonarrComponent } from './sonarr.component';
import { SonarrService } from '../sonarr.service';

@NgModule({
  imports: [
    CommonModule
  ],
  
  declarations: [SonarrComponent]
})
export class SonarrModule { }
