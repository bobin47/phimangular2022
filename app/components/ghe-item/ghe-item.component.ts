import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ghe-item',
  templateUrl: './ghe-item.component.html',
  styleUrls: ['./ghe-item.component.scss']
})
export class GheItemComponent {
  @Input() ghe: any = []
  @Output() emit = new EventEmitter();
  styleBtn: string = "primary";
  public static: boolean = false;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    console.log(this.ghe);

  }

  datghe() {
    if (this.static) {
      this.styleBtn = "primary"
      this.static = false
    } else {
      this.styleBtn = "accent"
      this.static = true

    }
    this.emit.emit(this.static)
  }


}
