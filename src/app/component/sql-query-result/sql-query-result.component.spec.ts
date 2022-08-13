import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlQueryResultComponent } from './sql-query-result.component';

describe('SqlQueryResultComponent', () => {
  let component: SqlQueryResultComponent;
  let fixture: ComponentFixture<SqlQueryResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlQueryResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlQueryResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
