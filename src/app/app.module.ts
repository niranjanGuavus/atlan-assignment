import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { MaterialExampleModule } from './../material.module';

import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { SqlQueryInputComponent } from './component/sql-query-input/sql-query-input.component';
import { SqlQueryResultComponent } from './component/sql-query-result/sql-query-result.component';
import { SqlQueryRunnerComponent } from './container/sql-query-runner/sql-query-runner.component';
import { SqlQueryBuilderComponent } from './screen/sql-query-builder/sql-query-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    SqlQueryInputComponent,
    SqlQueryResultComponent,
    SqlQueryRunnerComponent,
    SqlQueryBuilderComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgGridModule,
    MatNativeDateModule,
    MaterialExampleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
