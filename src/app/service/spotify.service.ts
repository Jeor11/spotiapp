import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log ('spotify servicio listo para usar');
  }

  getNewRelases(){

    const headers  = new HttpHeaders ({
    Authorization: 'Bearer BQBY208Gr8979rIR-m_tkmdDN286BNt7QmcYZehEdGqlabtwarHCDJIYvlEImYwcjwjNT_DhFzLvbrTNKWg'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
    .subscribe (data => {
      console.log (data);
    });
  }
}
