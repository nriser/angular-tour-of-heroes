import { Component } from '@angular/core';
import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  // As a result of the change to HeroService (Promisifying getHeroes in hero.service.ts), this.heroes is now set to a Promise rather than an array of heroes (Not what we want). So, change the implementation to act on the Promise when it resolves (from hero.service.ts). When the Promise resolves successfully, you'll have heroes to display.
  // if getHeroes() from hero.service.ts is successful, then... pass in the 'heroes' array returned from it and set it to this.heroes.
  // Pass the callback function as an argument to the Promise's then() method
  // The callback sets the component's heroes property to the array of heroes returned by the service.
  // new
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  // As a result of the change to HeroService (Promisifying getHeroes in hero.service.ts), this.heroes is now set to a Promise rather than an array of heroes (Not what we want).
  // this.heroService.getHeroes() is now a Promise! We don't want this, and don't want to set this.heroes to a promise.
  // old
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  ngOnInit(): void {
    this.getHeroes();
  }

  // an onSelect() method that sets the selectedHero property to the hero that the user clicks.
  // *ngIf="selectedHero": If selected is true, show. If not selected, false.
  onSelect(hero: Hero): void { // pass in 'hero' (of type Hero) as an argument argument
    this.selectedHero = hero; // define it as 'hero' that the user clicks on, passed in as an argument
  }
}


////// Async services and Promises
/*
The HeroService returns a list of mock heroes immediately; its getHeroes() signature is synchronous.
Eventually, the hero data will come from a remote server. When using a remote server, users don't have to wait for the server to respond; additionally, you aren't able to block the UI during the wait.
To coordinate the view with the response, you can use Promises, which is an asynchronous technique that changes the signature of the getHeroes() method.
//// The hero service makes a Promise
A Promise essentially promises to call back when the results are ready. You ask an asynchronous service to do some work and give it a callback function. The service does that work and eventually calls the function with the results or an error.
*/

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
