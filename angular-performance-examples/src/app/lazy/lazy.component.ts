import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy',
  standalone: true,
  imports: [],
  template: `
    <h2>Lazy-Loaded Component</h2>
    <p>This component was loaded on demand.</p>
  `,
  styles: [],
})
export class LazyComponent {}
