import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-track-by-ng-for',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="example">
      <h2>ngFor with trackBy</h2>
      <button (click)="update()">Update List</button>
      <ul>
        <li *ngFor="let item of items; trackBy: trackById">{{ item.name }}</li>
      </ul>
    </div>
  `,
  styles: [],
})
export class TrackByNgForComponent {
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  update() {
    this.items = [
      { id: 1, name: 'Item 1 (updated)' },
      { id: 4, name: 'Item 4' },
      { id: 5, name: 'Item 5' },
    ];
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
