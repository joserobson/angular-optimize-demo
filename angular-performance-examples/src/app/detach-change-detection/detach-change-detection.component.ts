import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-detach-change-detection',
  standalone: true,
  imports: [],
  template: `
    <div class="example">
      <h2>Detach/Reattach Change Detection</h2>
      <p>Value: {{ value }}</p>
      <button (click)="increment()">Increment</button>
      <button (click)="detach()">Detach</button>
      <button (click)="reattach()">Reattach</button>
      <button (click)="detectChanges()">Detect Changes</button>
    </div>
  `,
  styles: [],
})
export class DetachChangeDetectionComponent {
  value = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  increment() {
    this.value++;
  }

  detach() {
    this.cdr.detach();
  }

  reattach() {
    this.cdr.reattach();
  }

  detectChanges() {
    this.cdr.detectChanges();
  }
}
