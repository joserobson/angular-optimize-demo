import { Component } from '@angular/core';
import { DefaultChildComponent } from '../default-child/default-child.component';

@Component({
  selector: 'app-default-change-detection',
  standalone: true,
  imports: [DefaultChildComponent],
  template: `
    <div class="example">
      <h2>Default Change Detection</h2>
      <p>Parent component checks: {{ check() }}</p>
      <button (click)="update()">Update Parent Data</button>
      <app-default-child [data]="data"></app-default-child>
    </div>
  `,
  styles: [],
})
export class DefaultChangeDetectionComponent {
  data = { value: 'initial' };

  check() {
    console.log('DefaultChangeDetectionComponent checked');
    return true;
  }

  update() {
    this.data.value = 'updated';
  }
}
