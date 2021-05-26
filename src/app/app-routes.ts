import { Home1Component } from './components/home1/home1.component';
import { Home2Component } from './components/home2/home2.component';
import { Creacionhome1Component } from './components/creacionhome1/creacionhome1.component';
import { Creacionhome2Component } from './components/creacionhome2/creacionhome2.component';
import { ConsultaHome1Component } from './components/consulta-home1/consulta-home1.component';
import { ActualizarHome1Component } from './components/actualizar-home1/actualizar-home1.component';




import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes =[

  {path: 'home1', component: Home1Component},
  {path: 'home2', component: Home2Component},
  {path: 'CreacionHome1', component: Creacionhome1Component},
  {path: 'CreacionHome2', component: Creacionhome2Component},
  {path: 'ConsultaHome1/:id', component: ConsultaHome1Component},
  {path: 'ActualizarHome1/:id', component: ActualizarHome1Component},

  {path: '**', pathMatch:'full', redirectTo:'home1'}
];

export const APP_RUTING= RouterModule.forRoot(APP_ROUTES);

