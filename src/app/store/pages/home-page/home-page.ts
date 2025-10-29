import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductCard } from '@store/components/product-card/product-card';
import { ProductsService } from '@products/services/produts';
import { rxResource } from '@angular/core/rxjs-interop';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  private productServices = inject(ProductsService);

  productsResource = rxResource({
    request: () => ({}),
    loader: ({ request }) => {
      return this.productServices.getAllProducts({});
    },
  });
}
