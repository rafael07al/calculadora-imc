import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CalcularImcComponent } from "./calculadora-result/calcular.component";

@NgModule({
    declarations : [CalcularImcComponent],
    exports: [CalcularImcComponent],
    imports: [FormsModule]
})

export class CalculadoraImcModule{
    
}