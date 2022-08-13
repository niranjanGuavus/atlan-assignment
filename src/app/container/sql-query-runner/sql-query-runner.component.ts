import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { SqlQueryExecuterService } from './../../service/sql-query-executer.service';

@Component({
  selector: 'app-sql-query-runner',
  templateUrl: './sql-query-runner.component.html',
  styleUrls: ['./sql-query-runner.component.scss']
})
export class SqlQueryRunnerComponent implements OnInit {
  public background: ThemePalette = 'primary';
 
  public links = [
    { id: 1, name: 'query 1', query: "select * from shippers", data: [] },
    { id: 2, name: 'query 2', query: "select * from products", data: [] }
  ];
  public activeLink = this.links[0].id;

  public records: any[] = [];
  public query: string = "";
  constructor(private sqlService: SqlQueryExecuterService) { }

  ngOnInit(): void {

  }

  addLink() {
    const nextid = this.links.length+1;
    this.links.push({
      id: nextid,
      name: `query ${nextid}`,
       query: "", 
       data: []
    })
    this.onLinkChange(this.links[this.links.length-1])
  }

  removeLink() {
    const len = this.links.length;
    if(len<=1) {
      return;
    }

    this.links.splice(len-1, 1)
    if(this.activeLink === len){
      this.onLinkChange(this.links[len-2])
    }
  }

  public onLinkChange(link: any): void {
    this.activeLink = link.id
    this.records = link.data;
    this.query = link.query;

  }

  private updateLink(query: string, data: []): void {
    this.records = data;
    this.query = query
    for (const link of this.links) {
      if (link.id === this.activeLink) {
        link.query = query;
        link.data = data;
      }
    }
  }

  public executeQuery(query: string): void {
    const fileId = `query${this.activeLink % 4}`;
    this.sqlService.getResult(fileId, query)
      .subscribe(
        // Successful responses call the first callback.
        (data: any) => {
          //this.records = data;
          this.updateLink(query, data)
        },
        // Errors will call this callback instead:
        err => {
          this.updateLink(query, [])
          console.log('Something went wrong!');
        }
      );
  }

  public resetPage(): void {
    this.updateLink("", [])
  }



}
