import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../shared/baseurl';

import { RestangularModule, Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class PromotionService {

  constructor(private restangular: Restangular) { }

  getPromotions(): Observable<Promotion[]> {
    // return Observable.resolve (PROMOTIONS);
    // return Observable.of(PROMOTIONS).delay (2000);
    return this.restangular.all('promotions').getList();

  }

  getPromotion(id: number): Observable<Promotion> {
    // return Observable.resolve (PROMOTIONS.filter((promo) => (promo.id === id))[0]) ;
    // return Observable.of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).delay (2000);
    return this.restangular.one('promotions', id).get();


  }

  getFeaturedPromotion(): Observable<Promotion> {
    // return PROMOTIONS.filter((promotion) => promotion.featured)[0];
    // return Observable.resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
    // return Observable.of(PROMOTIONS.filter((pro) => pro.featured)[0]).delay (2000);
    return this.restangular.all('promotions').getList({ featured: true })
      .map(promotions => promotions[0]);

  }
}
