import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';  // pobieramy moduł do formow


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PytaniaComponent } from './pytania/pytania.component';
import { WyborProjektuComponent } from './wybor-projektu/wybor-projektu.component';
import {Routes, RouterModule } from '@angular/router'; //import do routingu
import { HomeComponent } from './home/home.component';

/* tworzymy ścieżki do routingu. Ważne: zaimportować Routes oraz RouterModule, oraz w imports (poniżej) 
RouterModule.forRoot(appRoutes) */

const appRoutes: Routes = [
{path: '', component: HomeComponent },
{path: 'wybor-projektu', component: WyborProjektuComponent },
];  // deklaracja ścieżek

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PytaniaComponent,
    WyborProjektuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) //import modelu Router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
