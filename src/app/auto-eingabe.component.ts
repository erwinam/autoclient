import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Auto } from './types';
import { AutoClientService } from './auto-client.service';

@Component({
    selector: 'app-auto-eingabe',
    template: `
        <div>
            <form novalidate (ngSubmit)="speichereAuto()" #form="ngForm">
                <p>
                    <label>Marke:</label>
                    <input type="text" [(ngModel)]="auto.marke" name="marke" required minlength="2">
                </p>
                <p>
                    <label>Modell:</label>
                    <input type="text" [(ngModel)]="auto.modell" name="modell" required minlength="2">
                </p>
                <p>
                    <label>Baujahr:</label>
                    <input type="number" [(ngModel)]="auto.baujahr" name="baujahr" required pattern="^\\d{4}$">
                </p>
                <p>
                    <label>Leistung (PS):</label>
                    <input type="number" [(ngModel)]="auto.leistungInPs" name="leistungInPs" required pattern="^\\d{2,4}$">
                </p>
                <p>
                    <label>Drehmoment (Nm):</label>
                    <input type="number" [(ngModel)]="auto.drehmoment" name="drehmoment" required pattern="^\\d{2,4}$">
                </p>
                <input *ngIf="form.valid" type="submit" value="Auto speichern">
            </form>      
            <pre>{{ auto | json }}</pre>        
        </div>
    `,
    styles: [`
        div {
            background-color: wheat;
            padding: 10px;
        }

        label {
            display: inline-block;
            width: 150px;
        }
    `]
})
export class AutoEingabeComponent {
    @Output() gespeichert = new EventEmitter<Auto>();
    auto = new Auto();

    constructor(private autoClientService: AutoClientService) {}

    speichereAuto() {
        this.autoClientService.speichereAuto(this.auto).then(
            auto => {
                this.gespeichert.emit(auto);
                this.auto = new Auto();
            }
        );
    }
}
