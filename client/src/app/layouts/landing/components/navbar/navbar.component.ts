import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core'
import { NotesService } from '../../../../core/services/notes.service'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.None, // Disable encapsulation
})
export class NavbarComponent {
  search = 'lee'

  constructor(private notesService: NotesService) {}

  onInputChange() {
    this.notesService.searchNotes(this.search)
  }
}
