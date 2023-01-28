import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})


export class ButtonComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() color: string | undefined;
  @Output() onClickEvent = new EventEmitter;

  constructor() {

  }

  btnClick(event:any) {
    this.onClickEvent.emit(event)
  }

  ngOnInit() {

  }
}
