import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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

interface Series {
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

export class SonarrServiceService {
  private host: string;
  private port: number;
  private apiVersion: string;
  private apiKey: string;

  private headers: HttpHeaders;

  constructor(private http: HttpClient) { 
    this.host = "192.168.68.61";
    this.port = 8989;
    this.apiVersion = "v3";
    this.apiKey = "80705402a8e345b880be69f04a0afc82";
    
    this.headers = new HttpHeaders();
    this.headers.set("X-Api-Key", this.apiKey);
  }

  getSeries() {
    return this.http.get<Series>(`http://${this.host}:${this.port}/api/${this.apiVersion}/series`, { headers: this.headers });
  }

  getSeriesById(id: number) {
    return this.http.get<Series>(`http://${this.host}:${this.port}/api/${this.apiVersion}/series/${id}}`);
  }
}
