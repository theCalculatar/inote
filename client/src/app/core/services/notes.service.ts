import { Injectable } from '@angular/core'
import { Note } from '../interfaces/note.interface'
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs'
import { NoteNetworkCall } from '../interfaces/notes.network.interface'

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  isLoading: Boolean = false

  search: Subject<Note[]> = new Subject<Note[]>()
  notes: Note[] = []

  constructor(private httpClient: HttpClient) {}

  getNotes(): Observable<NoteNetworkCall> {
    this.isLoading = true
    return this.httpClient.get<NoteNetworkCall>('/json/data.json', {
      observe: 'body',
    })
  }

  searchNotes(search: string) {
    const notes = this.notes.filter((note) => {
      return note.description.includes(search) || note.title.includes(search)
    })
    this.search.next(notes)
  }
}
