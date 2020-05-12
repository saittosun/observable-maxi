import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

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
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    // we can rebuild this manually.Let's comment out this code and let's build a real custom observable now.
    // tslint:disable-next-line:max-line-length
    // The observer in the end is a part that is interested in being informed about new data, about errors or about the observable being completed.
    // tslint:disable-next-line:max-line-length
    const customIntervalObservable = Observable.create(observer => {// Here, we're not responsible for listening because the observer is the listener, here we get that listening part as an argument and we need to tell it once we're done, once new data is there and so on.
      let count = 0;
      setInterval(() => {
        // tslint:disable-next-line:max-line-length
        // We can call next here to emit a new value and that is important. The observer has a couple of important methods, next is one of them, error is another of them, so that would be the one you use to throw an error and complete is one to let the observer know that you're done.
        observer.next(count);
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }

}
