import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sql-query-input',
  templateUrl: './sql-query-input.component.html',
  styleUrls: ['./sql-query-input.component.scss']
})
export class SqlQueryInputComponent implements OnInit {

  @Output()
  public execute = new EventEmitter<string>();

  @Output()
  public resetPage = new EventEmitter();

  @Input()
  public sqlQuery: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public onExecute():void {
    this.execute.emit(this.sqlQuery)
  }

  public clearQuery():void {
    this.sqlQuery = "";
  }

  public reset():void{
    this.resetPage.emit()
  }



}
