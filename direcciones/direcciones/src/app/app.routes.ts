import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Paises } from './paises/paises';
import { NuevoPais } from './paises/nuevo-pais/nuevo-pais';
import { Provincias } from './provincias/provincias';
import { Cantones } from './cantones/cantones';
import { Direcciones } from './direcciones/direcciones';
import { Noticias } from './noticias/noticias';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard,
        pathMatch: 'full'
    },
    {
        path: 'paises',
        component: Paises,
        pathMatch: "full"
    },

    {
        path: "nuevopais",
        component: NuevoPais,
        pathMatch: "full"
    },
    {
        path: 'editarpais/:id',
        component: NuevoPais,
        pathMatch: "full"
    },
    {
        path: 'provincias',
        component: Provincias,
        pathMatch: "full"
    },
    {
        path: 'cantones',
        component: Cantones,
        pathMatch: "full"
    },
    {
        path: 'direcciones',
        component: Direcciones,
        pathMatch: "full"
    },
        {
        path: 'noticias',
        component: Noticias,
        pathMatch: "full"
    }
];
