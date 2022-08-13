import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlQueryRunnerComponent } from './sql-query-runner.component';

describe('SqlQueryRunnerComponent', () => {
  let component: SqlQueryRunnerComponent;
  let fixture: ComponentFixture<SqlQueryRunnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlQueryRunnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlQueryRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
