import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () => import('./features/authentication/authentication.module')
      .then(m => m.AuthenticationModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./features/users/user.module')
      .then(m => m.UsersModule),
  },
  { path: '', redirectTo: 'authentication', pathMatch: 'full' },
  { path: '**', redirectTo: 'authentication' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
