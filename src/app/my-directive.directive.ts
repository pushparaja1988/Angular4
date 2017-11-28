import { Directive , ElementRef , HostListener } from '@angular/core';

@Directive({
  selector: '[greenColor]'
})
export class MyDirectiveDirective {

  constructor(Element:ElementRef) 
  {
    Element.nativeElement.style.color = "green";
  } 
  // @HostListener('click') doSomething(){
  //   alert("HostListener Called...");
  // }

 @HostListener('document:click',['$event'])
   elemClicked(elem){
     console.log('clicked',elem);
   }
}
