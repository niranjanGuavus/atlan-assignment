import { TestBed } from '@angular/core/testing';

import { SqlQueryExecuterService } from './sql-query-executer.service';

describe('SqlQueryExecuterService', () => {
  let service: SqlQueryExecuterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlQueryExecuterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
