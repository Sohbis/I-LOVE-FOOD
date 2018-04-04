import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADER } from '../shared/leaders';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../shared/baseurl';

import { RestangularModule, Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular) { }

  getLeaders(): Observable<Leader[]> {
    // return Observable.of(LEADER).delay(2000);

    return this.restangular.all('leaders').getList();

  }

  getLeader(id): Observable<Leader> {

    return Observable.of(LEADER.filter((leader) => (leader.id === id))[0]).delay (2000);


  }

  getFeaturedLeader(): Observable<Leader> {

    return this.restangular.all('leaders').getList({ featured: true })
      .map(leader => leader[0]);


  }
}
