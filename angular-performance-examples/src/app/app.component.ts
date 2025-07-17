import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DefaultChangeDetectionComponent } from './default-change-detection/default-change-detection.component';
import { OnPushChangeDetectionComponent } from './on-push-change-detection/on-push-change-detection.component';
import { DefaultNgForComponent } from './default-ng-for/default-ng-for.component';
import { TrackByNgForComponent } from './track-by-ng-for/track-by-ng-for.component';
import { DetachChangeDetectionComponent } from './detach-change-detection/detach-change-detection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    DefaultChangeDetectionComponent,
    OnPushChangeDetectionComponent,
    DefaultNgForComponent,
    TrackByNgForComponent,
    DetachChangeDetectionComponent,
  ],
  template: `
    <h1>Angular Performance Examples</h1>
    <nav>
      <a routerLink="/lazy">Load Lazy Component</a>
    </nav>
    <div class="container">
      <app-default-change-detection></app-default-change-detection>
      <app-on-push-change-detection></app-on-push-change-detection>
    </div>
    <div class="container">
      <app-default-ng-for></app-default-ng-for>
      <app-track-by-ng-for></app-track-by-ng-for>
    </div>
    <app-detach-change-detection></app-detach-change-detection>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-performance-examples';
}
