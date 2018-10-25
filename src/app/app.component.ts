import { Component, ViewChild } from '@angular/core';
import { TextService } from './text-service/text.service';
import { FileComponent } from './file/file.component';
import { SynonymService } from './synonym.service';
import { DatamuseResult } from 'src/datamuseResult';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Text Editor';
  selectedText: string;
  selectedFrom: number;
  selectedUntil: number;
  @ViewChild(FileComponent) file: FileComponent;
  synonyms: DatamuseResult[];

  /**
   *
   */
  constructor(private textService: TextService, private synonymService: SynonymService) {

  }

  onTextSelected(event: any) {
    this.selectedText = event.selected;
    this.selectedFrom = event.from;
    this.selectedUntil = event.until;
  }

  onToggleBoldStyle() {

    if (this.selectedText.includes('<strong>')) {
      this.selectedText = this.selectedText.replace('<strong>', '');
      this.selectedText = this.selectedText.replace('</strong>', '');
    } else {
      this.selectedText = '<strong>' + this.selectedText + '</strong>';
    }


    this.textService.updateFakeText(this.selectedText, this.selectedFrom, this.selectedUntil);
    this.file.refresh();


  }


  onToggleItalicsStyle() {

    if (this.selectedText.includes('<i>')) {
      this.selectedText = this.selectedText.replace('<i>', '');
      this.selectedText = this.selectedText.replace('</i>', '');
    } else {
      this.selectedText = '<i>' + this.selectedText + '</i>';
    }

    this.textService.updateFakeText(this.selectedText, this.selectedFrom, this.selectedUntil);
    this.file.refresh();

  }

  onCheckSyn() {
    const txt = this.selectedText;
    this.synonymService.getSynonym(txt)
      .subscribe(result => {
        this.synonyms = result;
        alert('SYNONYMS: ' + this.synonyms.map(x => x.word).join(','));
      });
  }

  onToggleUnderlineStyle() {
    if (this.selectedText.includes('<u>')) {
      this.selectedText = this.selectedText.replace('<u>', '');
      this.selectedText = this.selectedText.replace('</u>', '');
    } else {
      this.selectedText = '<u>' + this.selectedText + '</u>';
    }

    this.textService.updateFakeText(this.selectedText, this.selectedFrom, this.selectedUntil);
    this.file.refresh();
    this.selectedText = null;
  }


}


