import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [],
  templateUrl: './product-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPage { }
