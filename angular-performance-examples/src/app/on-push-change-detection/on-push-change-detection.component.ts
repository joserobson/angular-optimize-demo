import { Component, ChangeDetectionStrategy } from '@angular/core';
import { OnPushChildComponent } from '../on-push-child/on-push-child.component';

@Component({
  selector: 'app-on-push-change-detection',
  standalone: true,
  imports: [OnPushChildComponent],
  template: `
    <div class="example">
      <h2>OnPush Change Detection</h2>
      <p>Parent component checks: {{ check() }}</p>
      <button (click)="update()">Update Parent Data</button>
      <app-on-push-child [data]="data"></app-on-push-child>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushChangeDetectionComponent {
  data = { value: 'initial' };

  check() {
    console.log('OnPushChangeDetectionComponent checked');
    return true;
  }

  update() {
    this.data = { value: 'updated' };
  }
}
