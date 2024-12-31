import { Component, OnInit } from '@angular/core'
import { NotesCardComponent } from '../../../../shared/components/notes-card/notes-card.component'
import { NgFor } from '@angular/common'
import { Note } from '../../../../core/interfaces/note.interface'
import { NotesService } from '../../../../core/services/notes.service'

@Component({
  selector: 'app-content-area',
  imports: [NotesCardComponent, NgFor],
  templateUrl: './content-area.component.html',
  styleUrl: './content-area.component.scss',
})
export class ContentAreaComponent implements OnInit {
  notes: Note[] = []

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.getNotes()
  }

  getNotes() {
    this.notesService.getNotes().subscribe({
      next: (next) => {
        this.notesService.isLoading = false
        this.notesService.notes = next.data
        this.notes = this.notesService.notes
      },
      error: (error) => {
        this.notesService.isLoading = false
        console.log(error)
      },
    })

    this.notesService.search.subscribe((next) => {
      this.notes = next
    })
  }
}
