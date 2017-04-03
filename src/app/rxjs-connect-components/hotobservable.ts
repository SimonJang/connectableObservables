import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { createSubscriber } from '../lib/subscriber';

@Component({
    template: `This is different from hot observables such as mouse move events or stock tickers which are already producing values even 
    before a subscription is active. When an observer subscribes to a hot observable sequence, it will get all values in the stream 
    that are emitted after it subscribes. The hot observable sequence is shared among all subscribers, and each subscriber is pushed 
    the next value in the sequence. For example, even if no one has subscribed to a particular stock ticker, the ticker will continue 
    to update its value based on market movement. When a subscriber registers interest in this ticker, it will automatically receive the 
    next tick.
    
    <h3>publish()</h3>
    A connectable Observable resembles an ordinary Observable, except that it does not begin emitting items when it is subscribed to, 
    but only when the Connect operator is applied to it. In this way you can prompt an Observable to begin emitting items at a time of your choosing.

    <h3>connect()</h3>
    A connectable Observable resembles an ordinary Observable, except that it does not begin emitting items when it is subscribed to, but only when the Connect operator is applied to it. 
    In this way you can wait for all intended observers to subscribe to the Observable before the Observable begins emitting items.
    `
})
export class HotObservableComponent implements OnInit {

    ngOnInit() {
        /**publish()
         * 
         * A connectable Observable resembles an ordinary Observable, except that it does not begin emitting items when it is subscribed to, 
         * but only when the Connect operator is applied to it. 
         * 
         * In this way you can prompt an Observable to begin emitting items at a time of your choosing. */


        let intervalHotExample$ = Observable.interval(1000)
            .take(5)
            .publish();
        intervalHotExample$.connect();
        intervalHotExample$.subscribe(createSubscriber('Subscribing on observable after connect()'))
        
        setTimeout(() => {
            intervalHotExample$.subscribe(createSubscriber('Second subscriber, late'))
        }, 8000); 

        /**connect()
         *
         * A connectable Observable resembles an ordinary Observable, except that it does not begin emitting items when it is subscribed to, 
         *  but only when the Connect operator is applied to it. 
         *
         * In this way you can wait for all intended observers to subscribe to the Observable before the Observable begins emitting items. */


       /* let intervalHot$ = Observable.interval(1000)
            .take(5)
            .publish();


        // Question: which values will be emitted?
        intervalHot$.connect();
        setTimeout(() => {
            intervalHot$.subscribe(createSubscriber('QUESTION 1'));
        }, 4000);


        let intervalHotAlternative$ = Observable.interval(1000)
            .take(5)
            .publish();


        // Question: What is de difference?
        setTimeout(() => {
            intervalHotAlternative$.connect();
            intervalHotAlternative$.subscribe(createSubscriber('QUESTION 2'));
        }, 10000); */
    }

}