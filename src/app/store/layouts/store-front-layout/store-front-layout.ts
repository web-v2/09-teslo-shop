import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreNavbar } from '../../components/store-navbar/store-navbar';

@Component({
  selector: 'app-store-front-layout',
  standalone: true,
  imports: [RouterOutlet, StoreNavbar],
  templateUrl: './store-front-layout.html',
})
export class StoreFrontLayout {}
