import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() emitSearch: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public search(value: string | number) {
    this.emitSearch.emit(value);
  }
}
