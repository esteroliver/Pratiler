import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appInputDirective]',
  standalone: true
})
export class InputDirective {
  private el = inject(ElementRef<HTMLInputElement>);

  constructor() {
    this.estiloBase();
  }

  private estiloBase(){
    this.el.nativeElement.classList.add(
      'py-1',
      'px-2',
      'border-purple-200',
      'border',
      'border-solid',
      'rounded-lg', 
      'transition-all', 
      'w-full', 
      'outline-none'
    );
  }

  @HostListener('focus')
  onFocusIn(){
    this.el.nativeElement.classList.add(
      'ring',
      'ring-2',
      'ring-purple-100',
      'border-purple-300'
    );
  }

  @HostListener('blur')
  onFocusOut(){
    this.el.nativeElement.classList.remove(
      'ring', 
      'ring-2',
      'ring-purple-100',
      'border-purple-300'
    );
  }

  @HostListener('mouseenter')
  onHoverIn(){
    this.el.nativeElement.classList.add('border-purple-300');
  }

  @HostListener('mouseleave')
  onHoverLeave(){
    this.el.nativeElement.classList.remove('border-purple-300');
  }

}
