import { Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]'
})
export class IntersectionObserverDirective {
  @Input() animationClass: string = 'fade-in';
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, this.animationClass);
          this.observer.unobserve(this.el.nativeElement);
        }
      });
    });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
