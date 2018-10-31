import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './component/base/app.component';

import {NotfoundComponent} from './component/notfound/notfound.component';

import {WorkspaceComponent} from './component/workspace/workspace.component';
import {ChoixComponent} from './component/choix/choix.component';
import {NousComponent} from './component/nous/nous.component';
import {InscriptionComponent} from './component/inscription/inscription.component';
import {FlowComponent} from './component/flow/flow.component';
import {SecureRouteGuard} from './guard/secure-route.guard';

const route: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'mon-cv/:id',
    component: WorkspaceComponent,
    canActivate: [SecureRouteGuard]
  },
  { path: 'template', component: ChoixComponent},
  { path: 'nous', component: NousComponent},
  { path: 'inscription', component: InscriptionComponent},
  {
    path: 'mon-espace',
    component: FlowComponent,
    canActivate: [SecureRouteGuard]
  },
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( route )
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
