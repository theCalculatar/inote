import { Note } from './note.interface'

export interface NoteNetworkCall {
  code: number
  data: Note[]
}
