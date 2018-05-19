import { Component, OnInit, Input } from '@angular/core';
import { AutoClientService } from './auto-client.service';
import { Auto } from './types';

@Component({
    selector: 'app-auto-tabelle',
    template: `
        <div>
            <p>
                <input type="text" [(ngModel)]="modellFilter">
                <input type="button" value="Filter auf Modell setzen" (click)="aktualisiereAutos();">
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Marke</th>
                        <th>Modell</th>
                        <th>Leistung (PS)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let auto of autos">
                        <td>{{auto.marke}}</td>
                        <td>{{auto.modell}}</td>
                        <td>{{auto.leistungInPs}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    styles: [`
        div {
            background-color: lightgrey;
            padding: 10px;
            margin-top: 20px;
        }

        thead {
            background-color: darkgrey;
        }

        tbody {
            background-color: white;
        }

        td, th {
            border: 1px solid black;
            padding: 5px;
        }
    `]
})
export class AutoTabelleComponent implements OnInit {
    @Input() modellFilter = '';
    autos: Auto[];

    constructor(private autoClientService: AutoClientService) { }

    ngOnInit() {
        this.aktualisiereAutos();
    }

    aktualisiereAutos() {
        this.autoClientService.holeAutos(this.modellFilter).then(
            autos => this.autos = autos
        );
    }
}