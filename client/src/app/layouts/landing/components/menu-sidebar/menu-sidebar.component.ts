import { Component, Input } from '@angular/core'
import { Route } from '../../interface/route.interface'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-menu-sidebar',
  imports: [RouterLink],
  templateUrl: './menu-sidebar.component.html',
  styleUrl: './menu-sidebar.component.scss',
})
export class MenuSidebarComponent {
  @Input() route: Route | null = null
}
