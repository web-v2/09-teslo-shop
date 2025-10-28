import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'store-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './store-navbar.html',
})
export class StoreNavbar {}
