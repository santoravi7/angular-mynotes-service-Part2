import { Injectable } from '@angular/core';

import { Observable,of } from 'rxjs';

import { Notedata } from './notedata';
import { Notes } from './notes';
import { MessageService } from './message.service';

@Injectable({
  providedIn : 'root',
})
export class NoteService {

  constructor(private messageService: MessageService) { }

  getNotes(): Observable<Notedata[]> {
    this.messageService.add('NoteService: fetched notes');
    console.log("this is service : "+Notes);
    return of(Notes);
  }

  getNote(id: number): Observable<Notedata> {
    // TODO: send the message _after_ fetching the hero
    console.log("This is noteService.getNote : "+id);
    this.messageService.add(`NoteService: fetched note id=${id}`);
    return of(Notes.find(note => note.id === id));
  }
}