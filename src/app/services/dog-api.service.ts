import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogAPIService {

  constructor() { }

  private baseUrl = 'https://dog.ceo/api/breed/bulldog/images/random';

  http = inject(HttpClient);

  getRandomDog(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }

}
