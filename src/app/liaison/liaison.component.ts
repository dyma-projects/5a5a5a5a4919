import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-liaison',
  templateUrl: './liaison.component.html',
  styleUrls: ['./liaison.component.css']
})
export class LiaisonComponent implements OnInit {

  @Input() public title: string = 'Youpi';
  @Output() public survol: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendEvent(inputValue: string) {
    this.survol.emit(inputValue);
  }

}
