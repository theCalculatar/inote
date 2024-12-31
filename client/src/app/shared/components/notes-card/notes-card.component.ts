import { Component, Input } from '@angular/core'
import { Note } from '../../../core/interfaces/note.interface'

@Component({
  selector: 'app-notes-card',
  imports: [],
  templateUrl: './notes-card.component.html',
  styleUrl: './notes-card.component.scss',
})
export class NotesCardComponent {
  @Input() note: Note | null = null
}
