import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { createSubscriber } from '../lib/subscriber';

@Component({
    template: `Cold observables start running upon subscription, i.e., the observable sequence only starts pushing values to the observers when Subscribe is called. Values are also not shared among subscribers.`
})
export class ColdObservableComponent implements OnInit {

    ngOnInit() {
        let intervalCold$ = Observable.interval(1000)
            .take(5);

            intervalCold$.subscribe(createSubscriber('Subscription 1'));

        setTimeout(() => {
            intervalCold$.subscribe(createSubscriber('Subscription 2'));
        }, 2000);
    }

}