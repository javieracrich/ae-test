import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  @Output() toggleBoldStyle = new EventEmitter();
  @Output() toggleItalicsStyle = new EventEmitter();
  @Output() toggleUnderlineStyle = new EventEmitter();
  @Output() checkSynonym = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }

  toggleBold() {
    this.toggleBoldStyle.emit();
  }

  toggleItalics() {
    this.toggleItalicsStyle.emit();
  }

  toggleUnderline() {
    this.toggleUnderlineStyle.emit();
  }

  checkSyn() {
    this.checkSynonym.emit();
  }
}
