import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular) { }

  submitFeedBack(feedback): Observable<Feedback> {
    console.log('feedback' + feedback);
    return this.restangular.all('feedback').post(feedback);

  }
  // getFeedBacks(): Observable<Feedback> {
  //   return this.restangular.one('feedback').get();
  // }
  // getFeedBackIds(): Observable<number[]> {
  //   return this.getFeedBacks()
  //     .map(fb => fb.map(fbid => fbid.id));
  // }

  getFeedBack(index): Observable<Feedback> {
    return this.restangular.one('feedback', index ).get().map(fb => fb[index]);

}
}
