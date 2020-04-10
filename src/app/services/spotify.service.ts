import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

   

  constructor(private http: HttpClient) { 
    console.log('Spotify Service LIsto')

  }

getNewReleases() {
  
    let srcToken:string = environment.tokenSPotify;
    console.log (srcToken)
      
    const headers = new HttpHeaders({
      'Authorization' : srcToken
    });
    
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
        // .subscribe ( data => {
        //       console.log (data)
        //     });
}

}
