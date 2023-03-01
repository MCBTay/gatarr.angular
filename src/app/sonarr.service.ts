import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ArrSettings } from './settings-group/arr-settings';

interface AlternateTitle {
  title: string;
  seasonNumber: number;
}

interface Image {
  coverType: string;
  url: string;
  remoteUrl: string;
}

interface Season {
  seasonNumber: number;
  monitored: boolean;
  statistics: Statistics;
}

interface Statistics {
  previousAiring: Date;
  episodeFileCount: number;
  episodeCount: number;
  totalEpisodeCount: number;
  sizeOnDisk: any;
  percentOfEpisodes: number;
}

export interface Series {
  title: string;
  alternateTitles: AlternateTitle[];
  sortTitle: string;
  seasonCount: number;
  totalEpisodeCount: number;
  episodeCount: number;
  episodeFileCount: number;
  sizeOnDisk: number;
  status: string;
  overview: string;
  previousAiring: Date;
  network: string;
  airTime: string;
  images: Image[];
  seasons: Season[];
  year: number;
  path: string;
  profileId: number;
  languageProfileId: number;
  seasonFolder: boolean;
  monitored: boolean;
  useSceneNumbering: boolean;
  runtime: number;
  tvdbId: number;
  tvRageId: number;
  tvMazeId: number;
  firstAired: Date;
  lastInfoSync: Date;
  seriesType: string;
  cleanTitle: string;
  imdbId: string;
  titleSlug: string;
  certification: string;
  genres: string[];
  tags: any[];
  added: Date;
  qualityProfileId: number
  id: number;
}

@Injectable({
  providedIn: 'root'
})

export class SonarrService {
  private baseUrl: string = "";
  private headers: HttpHeaders = new HttpHeaders();
  private settings: ArrSettings = new ArrSettings();

  constructor(private http: HttpClient) { 
    this.initializeFromLocalStorage();
  }

  initializeFromLocalStorage() {
    var localStorageSettings = localStorage.getItem("sonarr");
    if (localStorageSettings == null) return;

    this.settings = JSON.parse(localStorageSettings.toString());

    this.baseUrl = `http${this.settings.isSecure ? "s" : ""}://${this.settings.host}:${this.settings.port}/api/v3`;

    this.headers = new HttpHeaders()
      .set("X-Api-Key", this.settings.apiKey)
      .set('Access-Control-Allow-Origin', '*');
  }

  getSeries() {
    return this.http.get<Series[]>(`${this.baseUrl}/series`, { headers: this.headers });
  }

  getSeriesById(id: number) {
    return this.http.get<Series>(`${this.baseUrl}/series/${id}}`, { headers: this.headers });
  }
}
