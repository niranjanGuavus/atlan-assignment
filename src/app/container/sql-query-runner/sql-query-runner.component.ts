import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Tab } from 'src/app/model/query-model';
import { SqlQueryExecuterService } from './../../service/sql-query-executer.service';

@Component({
  selector: 'app-sql-query-runner',
  templateUrl: './sql-query-runner.component.html',
  styleUrls: ['./sql-query-runner.component.scss']
})
export class SqlQueryRunnerComponent implements OnInit, OnChanges {
  
  @Input()
   public activeLink:Tab = {id:1, name:'query 1'};

  public records: any[] = [];
  public query: string = "";
  constructor(private sqlService: SqlQueryExecuterService) { }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['activeLink']?.currentValue !== changes['activeLink']?.previousValue) {
      this.query = changes['activeLink']?.currentValue.query;
    }
  }


  private updateLink(query: string, data: []): void {
    this.records = data;
    this.query = query
  }

  public executeQuery(query: string): void {
    const fileId = `query${this.activeLink?.id % 4}`;
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
