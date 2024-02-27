import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './home/home.component';
import { UslugeComponent } from './usluge/usluge.component';
import { OpremaComponent } from './oprema/oprema.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { AboutComponent } from './about/about.component';
import { KontaktComponent } from './kontakt/kontakt.component';

export const routes: Routes = [
    { path: '/home',title:"Home Page", component: HomeComponent },
    { path: '/usluge',title:"Services", component: UslugeComponent },
    { path: '/oprema',title:"Equipment", component: OpremaComponent },
    { path: '/galerija',title:"Gallery", component: GalerijaComponent },
    { path: '/about',title:"About", component: AboutComponent },
    { path: '/kontakt',title:"Contact", component: KontaktComponent },
];
