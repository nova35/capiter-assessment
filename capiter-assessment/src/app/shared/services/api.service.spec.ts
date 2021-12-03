import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, 
    HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  let url = 'https://reqres.in/';
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpClientModule,
            HttpClientTestingModule],
        providers: [ApiService]
    });
    service = TestBed.get(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  it('should call list and return a list of users', () => {
        const params = '';
        const mockResponse = { total: 1, total_page: 1 };
        service.list('api/users', params)
            .subscribe((res) => {
                expect(res).toEqual(mockResponse);
            });
        const req = httpMock.expectOne({
            method: 'GET',
            url: `${url}api/users`,
        });
        req.flush(mockResponse);
  })
});