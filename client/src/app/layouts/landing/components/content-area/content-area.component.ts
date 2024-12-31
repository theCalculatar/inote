import { Component, OnInit } from '@angular/core'
import { NotesCardComponent } from '../../../../shared/components/notes-card/notes-card.component'
import { NgFor } from '@angular/common'
import { Note } from '../../../../core/interfaces/note.interface'
// import { Note } from '../../../../core/interfaces/note.interface'
@Component({
  selector: 'app-content-area',
  imports: [NotesCardComponent, NgFor],
  templateUrl: './content-area.component.html',
  styleUrl: './content-area.component.scss',
})
export class ContentAreaComponent implements OnInit {
  notes: Note[] = []

  ngOnInit(): void {
    this.notes.push({
      id: 'id here',
      title: 'some title',
      description: 'its description',
      due: Date().slice(0,15),
    })
    this.notes.push({
      id: 'id here',
      title: 'some title',
      description: 'its description',
      due: Date().slice(0,15),
    })
    this.notes.push({
      id: 'id here',
      title: 'some title',
      description: 'its description',
      due: Date().slice(0,15),
    })
    this.notes.push({
      id: 'id here',
      title: 'some title',
      description: 'its description',
      due: Date().slice(0,15),
    })
   
  

  }
}
