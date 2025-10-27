import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-gender-page',
  standalone: true,
  imports: [],
  templateUrl: './gender-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenderPage { }
