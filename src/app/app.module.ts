import { CalculadoraImcModule } from './calculadoraimc/calculadoraimc.module';
import { TabelaImcModule } from './tabela-imc/tabelaimc.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [  
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TabelaImcModule,
    CalculadoraImcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
