import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-child',
  standalone: true,
  imports: [],
  template: `
    <div class="child">
      <h3>Default Child</h3>
      <p>Child component checks: {{ check() }}</p>
      <p>Data from parent: {{ data.value }}</p>
    </div>
  `,
  styles: [],
})
export class DefaultChildComponent {
  @Input() data: any;

  check() {
    console.log('DefaultChildComponent checked');
    return true;
  }
}
