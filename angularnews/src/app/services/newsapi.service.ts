import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsapiService {
  private baseUrl = 'https://api.sampleapis.com/futurama/characters';

  constructor(private http: HttpClient) {}

  public getAllNews() {
    return this.http.get(this.baseUrl);
  }
}
