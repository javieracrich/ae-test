import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatamuseResult } from 'src/datamuseResult';

@Injectable({
  providedIn: 'root'
})
export class SynonymService {

  constructor(private http: HttpClient) {

  }

  getSynonym(word: string): Observable<DatamuseResult[]> {
    const url = 'https://api.datamuse.com/words?rel_syn=' + word;

    return this.http.get(url).pipe(
      map(result => <DatamuseResult[]>result)
    );
  }
}
