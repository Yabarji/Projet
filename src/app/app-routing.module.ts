import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './component/base/app.component';
import {PlanComponent} from './plan/plan.component';
import {PresentationComponent} from './component/presentation/presentation.component';
import {TodolistComponent} from './component/todolist/todolist.component';
import {NotfoundComponent} from './component/notfound/notfound.component';
import {PipeComponent} from './component/pipe/pipe.component';
import {DirectiveComponent} from './component/directive/directive.component';
import {LocalComponent} from './component/local/local.component';
import {CustomPipeComponent} from './component/custom-pipe/custom-pipe.component';
import {CustomDirectiveComponent} from './component/custom-directive/custom-directive.component';
import {FormulaireComponent} from './component/formulaire/formulaire.component';
import {ReactiveFormComponent} from './component/reactive-form/reactive-form.component';
import {ServiceComponent} from './component/service/service.component';
import {PromobseComponent} from './component/promobse/promobse.component';
import {ParametersComponent} from './component/parameters/parameters.component';
import {AuthenComponent} from './component/authen/authen.component';
import {HttpComponent} from './component/http/http.component';
import {WorkspaceComponent} from './component/workspace/workspace.component';
import {ChoixComponent} from './component/choix/choix.component';
import {NousComponent} from './component/nous/nous.component';
import {InscriptionComponent} from './component/inscription/inscription.component';
import {FlowComponent} from './component/flow/flow.component';

const route: Routes = [

  { path: 'home', component: AppComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'todo', component: TodolistComponent },
  { path: 'pipe', component: PipeComponent},
  { path: 'directive', component: DirectiveComponent},
  { path: 'local', component: LocalComponent},
  { path: 'customP', component: CustomPipeComponent},
  { path: 'customD', component: CustomDirectiveComponent},
  { path: 'form', component: FormulaireComponent},
  { path: 'Rform', component: ReactiveFormComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'promo', component: PromobseComponent},
  { path: 'para', component: ParametersComponent},
  { path: 'auth', component: AuthenComponent},
  { path: 'http', component: HttpComponent},
  { path: 'workspace', component: WorkspaceComponent},
  { path: 'choix', component: ChoixComponent},
  { path: 'nous', component: NousComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path: 'flow', component: FlowComponent},

  {
    path: 'para/:name',
    component: ParametersComponent,
    canActivate: ['SecureRouteGuard']
  },




  { path: '', redirectTo: '/home', pathMatch: 'full'}, //prefix
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
