import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserSidebarComponent } from "../user-sidebar/user-sidebar.component";

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, UserSidebarComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
