import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlQueryInputComponent } from './sql-query-input.component';

describe('SqlQueryInputComponent', () => {
  let component: SqlQueryInputComponent;
  let fixture: ComponentFixture<SqlQueryInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlQueryInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlQueryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
