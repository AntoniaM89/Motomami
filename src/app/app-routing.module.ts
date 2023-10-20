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
    canActivate: [PageProtegidoGuard],
    loadChildren: () => import('./ped-viaje/ped-viaje.module').then( m => m.PedViajePageModule)
  },
  {
    path: 'rec-con',
    canActivate: [PageProtegidoGuard],
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
    path: 'tom-viaje',
    canActivate: [PageProtegidoGuard],
    loadChildren: () => import('./tom-viaje/tom-viaje.module').then( m => m.TomViajePageModule)
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

