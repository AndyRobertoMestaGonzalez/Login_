import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router'
import { ValidateTokenGuard } from './auth/guards/validate-htoken.guard';

const routes : Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'dashboard',
    loadChildren: () => import('./protected-app/protected-app.module').then(m=>m.ProtectedAppModule),
    canActivate:[ValidateTokenGuard],
    canLoad:[ValidateTokenGuard]
  },
  {
    path:'**',
    redirectTo: 'auth'
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RouterModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
