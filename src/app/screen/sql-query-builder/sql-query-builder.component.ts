
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sql-query-builder',
  templateUrl: './sql-query-builder.component.html',
  styleUrls: ['./sql-query-builder.component.scss']
})
export class SqlQueryBuilderComponent implements OnInit {



  public tabs = [
    { id: 1, name: 'query 1', query: "select * from shippers" },
    { id: 2, name: 'query 2', query: "select * from products" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addTab() {
    const nextid:number = this.tabs.length+1;
    this.tabs.push({id: nextid, name: `query ${nextid}`, query:""});
  }

  removeLink() {
    const len = this.tabs.length;
    if(len<=1) {
      return;
    }
    this.tabs.splice(len-1, 1)
  }
}
