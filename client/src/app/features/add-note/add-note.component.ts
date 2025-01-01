import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NotesService } from '../../core/services/notes.service'
import { Note } from '../../core/interfaces/note.interface'
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-note',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss',
})
export class AddNoteComponent {
  dateTime: string = ''
  title: string = ''
  description: string = ''
  errMsg: string = ''

  constructor(private notesService: NotesService, private router: Router) {}

  addNotes() {
    this.errMsg = ''
    const note: Note = {
      id: '',
      title: this.title,
      description: this.description,
      due: this.dateTime,
    }
    this.notesService.addNotes(note).subscribe({
      next: (note) => {
        console.log(note)
        //redirect
        this.router.navigate(['/'])
      },
      error: () => {
        this.errMsg = 'Error occured, please try again!'
      },
    })
  }

  hasChanged(event: string): void {
    console.log(event)
  }
}
