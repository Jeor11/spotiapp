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
        'Bearer BQBl_734xmFWBzyCpj47Kc-4Imz2wbAIpyHa_h0NJR2gq5XhoqWBUx5kHG0cLf2-gyVQFvhVzBoeUmQb-DA',
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

