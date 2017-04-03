import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { createSubscriber } from '../lib/subscriber';

@Component({
    template:
    `
    <h1>refCount() operator</h1>
    <p>The RefCount operator automates the process of connecting to and disconnecting from a connectable Observable. 
    It operates on a connectable Observable and returns an ordinary Observable. </p>
     
     <p>When the first observer subscribes to this Observable, RefCount connects to the underlying connectable Observable. 
     RefCount then keeps track of how many other observers subscribe to it and does not disconnect from the underlying connectable 
     Observable until the last observer has done so.</p>
    `
})
export class RefCountObservableComponent implements OnInit {

    ngOnInit() {

        // Without replay the values published during the sequence are lost

        /**
     * The RefCount operator automates the process of connecting to and disconnecting from a connectable Observable. 
     * It operates on a connectable Observable and returns an ordinary Observable. 
     * 
     * When the first observer subscribes to this Observable, RefCount connects to the underlying connectable Observable. 
     * RefCount then keeps track of how many other observers subscribe to it and does not disconnect from the underlying connectable 
     * Observable until the last observer has done so.
     */

        let intervalHotWithRef$ = Observable.interval(1000)
            .take(5)
            .publish()
            .refCount();

       /* setTimeout(() => {
            intervalHotWithRef$.subscribe(createSubscriber('Checking observable with refCount operator'));
        }, 1000);

        // Question: Which values wil be displayed by this subscription?

        setTimeout(() => {
            intervalHotWithRef$.subscribe(createSubscriber('Second subscription on refCount observable'));
        }, 5000);*/

        // with share() instead of connect() or refCount()

        let intervalHotWithShare$ = Observable.interval(1000)
            .take(5)
            .share();

        intervalHotWithShare$.subscribe(createSubscriber('Subscription 1: With share() '));
        setTimeout(() => {
            intervalHotWithShare$.subscribe(createSubscriber('Subscription 2: With share() '))
        }, 5000)
    }

}