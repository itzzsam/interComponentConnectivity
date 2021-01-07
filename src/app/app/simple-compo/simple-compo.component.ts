import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'compo',
  template: `
    <button type="submit" (click)='onClickUndo()'>Undo</button>
  `,
  styleUrls: ['./simple-compo.component.css']
})
export class SimpleCompoComponent implements OnChanges {
  @Input() val : string;
  @Output() undoEvent = new EventEmitter<string>();
  prev : string;
  ngOnChanges(changes: SimpleChanges): void {
    this.prev = changes.val.previousValue;
  }
  onClickUndo(){
    this.undoEvent.emit(this.prev)
  }
}
