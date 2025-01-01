import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { NotesService } from '../../../../core/services/notes.service'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { filter, map } from 'rxjs'

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.None, // Disable encapsulation
})
export class NavbarComponent implements OnInit {
  search = ''
  hideControl: Boolean = false
  title: string = ''

  constructor(
    private notesService: NotesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getTitle()
    this.isOnHome()
  }

  isOnHome() {
    const hide = ['/profile', '/add-new']

    this.hideControl = hide.includes(this.router.url)

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.hideControl = hide.includes(event.urlAfterRedirects)
      })
  }

  onInputChange() {
    this.notesService.searchNotes(this.search)
  }

  getTitle() {
    let route = this.activatedRoute
    while (route.firstChild) {
      route = route.firstChild
    }
    this.title = route.snapshot.data['title']

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute
          while (route.firstChild) {
            route = route.firstChild
          }
          return route.snapshot.data['title']
        })
      )
      .subscribe((title: string) => {
        this.title = title
      })
  }
  addTask() {
    this.router.navigate(['/add-new'])
  }
  backBtn() {
    this.router.navigate(['/'])
  }
}
