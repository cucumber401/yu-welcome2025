import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBarChartAnimate]'
})
export class BarChartAnimateDirective {
  @Input('appBarChartAnimate') targetWidth: string = '0%';
  private observer!: IntersectionObserver;


  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'width', '0%');

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.setStyle(this.el.nativeElement, 'width', this.targetWidth);
          this.observer.unobserve(this.el.nativeElement);
        }
      })
    })

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

}
