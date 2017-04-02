import { Component, OnInit } from '@angular/core';
import { createSubscriber } from './lib/subscriber';

import { Observable } from 'rxjs/Observable';

// Connectable operators

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/share';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {



  }

}
