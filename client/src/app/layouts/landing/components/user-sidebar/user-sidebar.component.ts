import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-user-sidebar',
  imports: [],
  templateUrl: './user-sidebar.component.html',
  styleUrl: './user-sidebar.component.scss',
})
export class UserSidebarComponent {
  @Input() name: string = ''
  @Input() email: string = ''
}
