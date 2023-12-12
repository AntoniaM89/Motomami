import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageProtegidoGuard } from './guards/page-protegido.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch:'full'},
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'ped-viaje',
    
    loadChildren: () => import('./ped-viaje/ped-viaje.module').then( m => m.PedViajePageModule)
  },
  {
    path: 'rec-con',
    loadChildren: () => import('./rec-con/rec-con.module').then( m => m.RecConPageModule)
  },
  {
    path: 'casita',
    canActivate: [PageProtegidoGuard],
    loadChildren: () => import('./casita/casita.module').then( m => m.CasitaPageModule)
  },
  {
    path: 'e404',
    loadChildren: () => import('./e404/e404.module').then( m => m.E404PageModule)
  }
  ,
  {
    path: 'gen-viaje',
    canActivate: [PageProtegidoGuard],
    loadChildren: () => import('./gen-viaje/gen-viaje.module').then( m => m.GenViajePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'casita2',
    canActivate: [PageProtegidoGuard],
    loadChildren: () => import('./casita2/casita2.module').then( m => m.Casita2PageModule)
  },
  {
    path: 'definir-hora-precio',
    canActivate: [PageProtegidoGuard],
    loadChildren: () => import('./definir-hora-precio/definir-hora-precio.module').then( m => m.DefinirHoraPrecioPageModule)
  },

  {path: '**',
  redirectTo: 'e404',
  pathMatch:'full'},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

