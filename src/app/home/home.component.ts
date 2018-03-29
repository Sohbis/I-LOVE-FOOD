import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;

  constructor(private dishService: DishService,
    private promotionservice: PromotionService, private leaderService: LeaderService, @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getFeaturedDish()
      .subscribe(dish => this.dish = dish, errmess => this.dishErrMess = <any>errmess);

    this.promotionservice.getFeaturedPromotion().
    subscribe(pro => this.promotion = pro);

    this.leaderService.getFeaturedLeader().
    subscribe(leader => this.leader = leader);
  }

}