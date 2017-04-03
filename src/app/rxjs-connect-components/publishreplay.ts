import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { createSubscriber } from '../lib/subscriber';

@Component({
    template:
    `
    <h1>publishReplay() operator</h1>
    If you apply the Replay operator to an Observable before you convert it into a connectable Observable, 
    the resulting connectable Observable will always emit the same complete sequence to any future observers, 
    even those observers that subscribe after the connectable Observable has begun to emit items to other subscribed observers. 
    `
})
export class PublishReplayComponent implements OnInit {

    ngOnInit() {
        /** If you apply the Replay operator to an Observable before you convert it into a connectable Observable, 
     * the resulting connectable Observable will always emit the same complete sequence to any future observers, 
     * even those observers that subscribe after the connectable Observable has begun to emit items to other subscribed observers. 
     * 
     * */

        let intervalHotWithReplay$ = Observable.interval(1000)
            .take(5)
            .publishReplay()
            .refCount();


            intervalHotWithReplay$.subscribe(createSubscriber('With publishReplay and refCount, subscription 1'));

        // Question: What is de difference (there is) ?

        setTimeout(() => {
            intervalHotWithReplay$.subscribe(createSubscriber('With publishReplay and refCount, subscription 2'));
        }, 4000);

        
        // With connect() instead of refCount


        /*let intervalHotWithConnect$ = Observable.interval(1000)
            .take(5)
            .publishReplay();

        intervalHotWithConnect$.connect();
        intervalHotWithConnect$.subscribe(createSubscriber('With connect(): Subscription 1 '));
        setTimeout(() => {
            intervalHotWithConnect$.subscribe(createSubscriber('With connect(): Subscription 2 '));
        },3000)*/
        
    }

}