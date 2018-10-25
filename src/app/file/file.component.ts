import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TextService } from '../text-service/text.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  text: string;
  @Output() onTextSelected = new EventEmitter();
  constructor(private textService: TextService) {
  }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    this.textService.getFakeText().subscribe(text => this.text = text);
  }

  showSelectedText() {

    //this works only the first time :(
    var selection = window.getSelection().getRangeAt(0);

    var event = {
      selected: this.text.substring(selection.startOffset, selection.endOffset),
      from: selection.startOffset,
      until: selection.endOffset
    }
    this.onTextSelected.emit(event);
  }
}
