import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms'; // <-- NgModel lives here!

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports:[ BrowserModule,
            FormsModule // <-- import the FormsModule before binding using [(ngModel)] in app.component.ts
  ],
  declarations: [ AppComponent,
                  HeroDetailComponent
                ], // In general, the declarations array contains a list of application components, pipes, and directives that belong to the module. A component must be declared in a module before other components can reference it. This module declares only the two application components, AppComponent and HeroDetailComponent.
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
