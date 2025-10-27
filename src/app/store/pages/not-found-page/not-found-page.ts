import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [],
  templateUrl: './not-found-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage { }
