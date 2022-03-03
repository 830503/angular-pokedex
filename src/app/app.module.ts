import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DataService } from './service/data.service';
import { MyPokemonComponent } from './components/my-pokemon/my-pokemon.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    SearchBarComponent,
    PokemonDetailsComponent,
    MyPokemonComponent,
    WishListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
