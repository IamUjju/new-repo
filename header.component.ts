import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges,  OnInit {
  // @Input() message: string ='';
  ngOnInit(): void{
    console.log("NgOnInit");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }
  count: number = 0;
  increment(count:number): void {
    this.count = count + 1;
  }
  decrement(count:number): void {
    this.count = count - 1;
  }
  onSearchChange(eventData:Event):void{
    this.count = Number(((<HTMLInputElement>eventData.target).value));
  }
}
