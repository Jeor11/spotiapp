import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modulo para las rutas
import { RouterModule } from '@angular/router';
// Modulo http
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

// Importar Rutas
import { ROUTES } from './app.routes';
// Importacion de Servicios
import { SpotifyService } from './service/spotify.service';
// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash : true}) // Importante para las rutas
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
