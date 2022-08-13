import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-sql-query-result',
  templateUrl: './sql-query-result.component.html',
  styleUrls: ['./sql-query-result.component.scss']
})
export class SqlQueryResultComponent implements OnInit, OnChanges {

  @Input()
  public records: any[] = [];

  // @ViewChild('queryGrid') grid: ElementRef;

  public columnDefs: any[] = [];
  public rowData: any[] = [];

  public defaultColDef: ColDef = {
    enableValue: true,
    sortable: true,
    resizable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
  };


  constructor() { }

  ngOnInit(): void {
  }

  /**
   * 
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['records']?.currentValue !== changes?.['records']?.previousValue) {
      this.generateGridColumns();
    }
  }

  /**
   * This function  calls for generating columns for grid based on incoming records.
   */
  private generateGridColumns(): void {
    if (this.records && this.records.length > 0) {
      //generate grid columns from the first row of the records
      const item = this.records[0];
      const columns = Object.keys(item);
      this.columnDefs = columns.map(name => {
        console.log(name);
        return { field: name }
      });
      this.rowData = this.records;

    } else {
      this.columnDefs = [];
      this.rowData = []
    }
  }
}
