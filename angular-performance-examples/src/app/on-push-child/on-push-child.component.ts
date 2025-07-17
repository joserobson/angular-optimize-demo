import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-on-push-child',
  standalone: true,
  imports: [],
  template: `
    <div class="child">
      <h3>OnPush Child</h3>
      <p>Child component checks: {{ check() }}</p>
      <p>Data from parent: {{ data.value }}</p>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushChildComponent {
  @Input() data: any;

  check() {
    console.log('OnPushChildComponent checked');
    return true;
  }
}
