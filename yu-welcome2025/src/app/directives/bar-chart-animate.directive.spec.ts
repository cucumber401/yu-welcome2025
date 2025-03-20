import { BarChartAnimateDirective } from './bar-chart-animate.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// 測試 directive 是否可以成功建立（基本測試）
// 測試元素進入視口後，寬度是否變更（模擬 IntersectionObserver）

@Component({
  template: `<div appBarChartAnimate="75%"></div>`
})
class TestComponent {}

describe('BarChartAnimateDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let debugEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, BarChartAnimateDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    debugEl = fixture.debugElement.query(By.directive(BarChartAnimateDirective));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directiveInstance = debugEl.injector.get(BarChartAnimateDirective);
    expect(directiveInstance).toBeTruthy();
  });

  it('should initially set width to 0%', () => {
    const element: HTMLElement = debugEl.nativeElement;
    expect(element.style.width).toBe('0%');
  });

  it('should apply target width when element is intersecting', () => {
    const element: HTMLElement = debugEl.nativeElement;
    const directiveInstance = debugEl.injector.get(BarChartAnimateDirective);

    // 模擬 IntersectionObserver 呼叫
    (directiveInstance as any).observer.callback([
      { isIntersecting: true, target: element }
    ]);

    // 測試是否已改變寬度
    expect(element.style.width).toBe('75%');
  });
});