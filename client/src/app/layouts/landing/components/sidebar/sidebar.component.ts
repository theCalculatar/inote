import { Component } from '@angular/core'
import { UserSidebarComponent } from '../user-sidebar/user-sidebar.component'
import { Route } from '../../interface/route.interface'
import { MenuSidebarComponent } from '../menu-sidebar/menu-sidebar.component'
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-sidebar',
  imports: [UserSidebarComponent, MenuSidebarComponent, NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  routes: Route[] = [
    {
      title: 'Add new',
      icon: '/svgs/add_square.svg',
      path: '/add-new',
    },
    {
      title: 'Scheduled',
      icon: '/svgs/alarmclock.svg',
      path: '/',
    },
  ]
}
