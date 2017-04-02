import { Routes } from '@angular/router';

import { ColdObservableComponent } from './rxjs-connect-components/coldobservable';
import { HotObservableComponent } from './rxjs-connect-components/hotobservable';
import { RefCountObservableComponent } from './rxjs-connect-components/refcount';
import { PublishReplayComponent } from './rxjs-connect-components/publishreplay';

export const routes:Routes = [
    { path: 'coldobservable', component: ColdObservableComponent },
    { path: 'hotobservable', component: HotObservableComponent },
    { path: 'refcount', component: RefCountObservableComponent },
    { path: 'replay', component: PublishReplayComponent }
]