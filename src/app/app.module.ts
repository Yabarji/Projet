import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe);
registerLocaleData(localeFr);

import { AppComponent } from './component/base/app.component';
import { RouteComponent } from './component/route/route.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
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
    RouteComponent,
    NotfoundComponent,
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
    { provide: LOCALE_ID, useValue: 'fr'}
  ],
  bootstrap: [RouteComponent, InscriptionComponent , ConnectionComponent ]
})
export class AppModule { }
