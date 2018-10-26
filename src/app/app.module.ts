import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe);
registerLocaleData(localeFr);

import { AppComponent } from './component/base/app.component';
import { PlanComponent } from './plan/plan.component';
import { PresentationComponent } from './component/presentation/presentation.component';
import { TodolistComponent } from './component/todolist/todolist.component';
import {AppRoutingModule} from './app-routing.module';
import { RouteComponent } from './component/route/route.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { PipeComponent } from './component/pipe/pipe.component';
import { DirectiveComponent } from './component/directive/directive.component';
import { LocalComponent } from './component/local/local.component';
import { CustomPipeComponent } from './component/custom-pipe/custom-pipe.component';
import { PowerPipe } from './pipe/power/power.pipe';
import { PipelindromePipe } from './pipe/pipelindrome/pipelindrome.pipe';
import { CustomDirectiveComponent } from './component/custom-directive/custom-directive.component';
import { HighlightDirective } from './directive/highlight/highlight.directive';
import { FormulaireComponent } from './component/formulaire/formulaire.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { ServiceComponent } from './component/service/service.component';
import { PromobseComponent } from './component/promobse/promobse.component';
import { ParametersComponent } from './component/parameters/parameters.component';
import { AuthenComponent } from './component/authen/authen.component';
import { HttpComponent } from './component/http/http.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { WorkspaceComponent } from './component/workspace/workspace.component';
import { ChoixComponent } from './component/choix/choix.component';
import { NousComponent } from './component/nous/nous.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { ConnectionComponent } from './component/connection/connection.component';
import { CVComponent } from './component/cv/cv.component';
import { FlowComponent } from './component/flow/flow.component';


@NgModule({
  declarations: [
    AppComponent,
    PlanComponent,
    PresentationComponent,
    TodolistComponent,
    RouteComponent,
    NotfoundComponent,
    PipeComponent,
    DirectiveComponent,
    LocalComponent,
    CustomPipeComponent,
    PowerPipe,
    PipelindromePipe,
    CustomDirectiveComponent,
    HighlightDirective,
    FormulaireComponent,
    ReactiveFormComponent,
    ServiceComponent,
    PromobseComponent,
    ParametersComponent,
    AuthenComponent,
    HttpComponent,
    WorkspaceComponent,
    ChoixComponent,
    NousComponent,
    InscriptionComponent,
    ConnectionComponent,
    CVComponent,
    FlowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'SecureRouteGuard', useValue: () => true },
    { provide: LOCALE_ID, useValue: 'fr'}],
  bootstrap: [RouteComponent, InscriptionComponent , ConnectionComponent ]
})
export class AppModule { }
