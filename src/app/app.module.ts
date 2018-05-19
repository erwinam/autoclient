import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutoEingabeComponent } from './auto-eingabe.component';
import { AutoTabelleComponent } from './auto-tabelle.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        AutoEingabeComponent,
        AutoTabelleComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
