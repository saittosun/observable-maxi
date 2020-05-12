import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {
  }

  // tslint:disable-next-line:max-line-length
  // One common question I get is OK, we unsubscribe here, why don't we unsubscribe in the user component, here where we also set up a subscription? And that is a valid question. The answer simply is Angular does that for you. For the observables provided by Angular, like params but also any other observable you'll encounter throughout this course that is provided by an Angular package or by a feature provided by Angular, all these Angular observables are managed by Angular and therefore, you don't need to unsubscribe manually here, Angular will take care about this.
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }
}
