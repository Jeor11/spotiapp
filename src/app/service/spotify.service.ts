import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('spotify servicio listo para usar');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCdwfgEzuKW3CHs-5oTdNoEzI8myJMqM7WVxxgCCjTYdCGqJe9RMaAZZYu7CtbrttaeXg3g4q02oLie5uA',
    });
    return this.http.get(url, { headers });
  }

  getNewRelases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data: any) => {
        return data.albums.items;
      })
    );
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data: any) => {
        return data.artists.items;
      })
    );
  }
}

