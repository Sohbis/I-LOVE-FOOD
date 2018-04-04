import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(), expand()
  ],
})
export class AboutComponent implements OnInit {

  leader: Leader[];
  constructor(private leaderService: LeaderService, @Inject('BaseURL') private BaseURL ) { }

  ngOnInit() {
    // this.leader = this.leaderService.getLeaders();
    this.leaderService.getLeaders().
    subscribe(leader => this.leader = leader);


  }

}
