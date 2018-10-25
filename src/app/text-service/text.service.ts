import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class TextService {


  text = 'A year ago I was in the audience at a gathering of designers in San Francisco. ' +
    'There were four designers on stage, and two of them worked for me. I was there to support them. ' +
    'The topic of design responsibility came up, possibly brought up by one of my designers, I honestly don’t remember the details. ' +
    'What I do remember is that at some point in the discussion I raised my hand and suggested, to this group of designers, ' +
    'that modern design problems were very complex. And we ought to need a license to solve them.';


  getFakeText(): Observable<string> {
    return of(this.text);
  }

  updateFakeText(replaceString, fromIndex, untilIndex): Observable<string> {
    this.text = this.text.substr(0, fromIndex) +
      replaceString +
      this.text.substr(untilIndex, this.text.length);

    return of(this.text);
  }
}
