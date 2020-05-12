import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() { }

  // tslint:disable-next-line:max-line-length
  // we can now use our subscription and call unsubscribe and that means that whenever we leave that component, we clear that subscription and therefore we prevent memory leaks because we're not keeping old subscriptions around.
  ngOnInit() {
    this.firstObsSubscription = interval(1000).subscribe(count => {
      console.log(count);
    });
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }

}
