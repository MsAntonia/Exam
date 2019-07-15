import { TestBed } from '@angular/core/testing';

import { StaticDatasourceService } from './static-datasource.service';

describe('StaticDatasourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaticDatasourceService = TestBed.get(StaticDatasourceService);
    expect(service).toBeTruthy();
  });
});
