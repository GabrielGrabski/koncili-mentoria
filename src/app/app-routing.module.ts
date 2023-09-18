import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './features/account/account.component';

const routes: Routes = [
  {
    path: 'features',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
