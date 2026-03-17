import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-botao-generico',
  imports: [
    CommonModule
  ],
  template: `
  <button 
  class="botao"
  [ngClass]="tipoBotaoEstilo"
  [disabled]="desabilitado()"
  (click)="click()"
  >
    {{legenda()}}
  </button>
  `,
  styleUrl: './botao-generico.scss',
})
export class BotaoGenerico {
  tipoBotao = input<'primario' | 'secundario'>('primario');
  desabilitado = input<boolean>(false);
  legenda = input.required<string>();

  clickEvent = output<void>();

  tipoBotaoEstilo = 'desabilitado';

  ngOnChanges(){
    if(this.desabilitado())
      this.tipoBotaoEstilo = 'desabilitado';
    else
      this.tipoBotaoEstilo = this.tipoBotao();
  }

  click(){
    this.clickEvent.emit();
  }
}
