import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>Auto Manager</h1>
        <app-auto-eingabe (gespeichert)="autoTabelle.aktualisiereAutos();"></app-auto-eingabe>
        <app-auto-tabelle #autoTabelle modellFilter="Mustang"></app-auto-tabelle>
    `,
    styles: []
})
export class AppComponent {}