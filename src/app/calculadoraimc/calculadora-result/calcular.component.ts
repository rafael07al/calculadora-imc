import { Component, signal } from "@angular/core"

@Component({
    selector: "calculadora-resultado",
    templateUrl: "./calcular.component.html",
    styleUrls: [ "./calcular.component.css"]
})

export class CalcularImcComponent{
    peso : number = 0;
    altura: number = 0;
    imc = signal<number>(0);

    constructor(){

    }

    calcularImc() {     
        this.imc.update(imc => Number(this.peso) / Number(this.altura * 2))   
        alert(this.imc());
    }
}