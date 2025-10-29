import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductCard } from '@store/components/product-card/product-card';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
